---
layout: post
title:  "Способы оптимизации изображений, о которых вы могли не знать"
name: "Как оптимизировать изображения для сайта"
description: "Делюсь способами оптимизации изображений для сайта, которые использую сам и&nbsp;рекомендую другим."
date:   2018-10-02
last_modified_at: 2019-01-13
categories: инструкции
permalink: "/instrukcii/optimizaciya-izobrajenii/"
tags: "инструменты"
image: /images/tizer-50.jpg
keywords: "оптимизация изображений"
---

<p>Скорость загрузки сайта была в&nbsp;числе моих основных приоритетов еще до&nbsp;настойчивых рекомендаций Google. Один из&nbsp;факторов, влияющих на&nbsp;скорость,&nbsp;— вес изображений. Меньше вес&nbsp;— браузер быстрее показывает страницу. Я&nbsp;пробовал разные способы оптимизации изображений и&nbsp;в&nbsp;результате выбрал несколько, которые использую сам и&nbsp;рекомендую другим. </p>

<nav class="toc">
<ul>
  <li>
    <a href="#1">
      <span class="tocnumber">1 </span>Стандартный подход
    </a>
  </li>
  <li>
    <a href="#2">
      <span class="tocnumber">2 </span>Новое требование: каждому экрану свое изображение
    </a>
  </li>

      <li>
        <a href="#3">
        <span class="tocnumber">3 </span>А&nbsp;можно&nbsp;ли проще?
        </a>
      </li>
</ul>
</nav>

<h2 id="1">Стандартный подход</h2>
<p>Перед публикацией фотографии на&nbsp;сайте я&nbsp;уменьшаю ее&nbsp;вес. Делаю это в&nbsp;графическом редакторе (Gimp + плагин «gimp-plugin-saveforweb») или <a href="https://imagecompressor.com/ru/">сервисе Optimizilla</a>. </p>

<b>Пример</b>
<div class="flex-in">
<div class="flex-1">
<img src="/images/coin-optimizilla.jpg" alt="фотография монеты" width="300" height="298">
</div>
<div class="flex-1">
<div class="wtf">оригинал, 300px*298px, 102,4&nbsp;КБ <br/>
автор фото&nbsp;— <a href="https://www.flickr.com/photos/simon50000/">www.flickr.com/photos/simon50000/</a></div>
</div>
</div>

<div class="flex-in">
<div class="flex-1">
<img src="/images/coin-optimizilla.jpg" alt="оптимизированная с помощью Gimp фотография монеты" width="300" height="298" >
</div>
<div class="flex-1">
<div class="wtf">оптимизировано в&nbsp;Gimp, 32,4&nbsp;КБ <br />
открыл фото и&nbsp;сохранил для веб. настройки программы&nbsp;— по&nbsp;умолчанию</div>
</div>
</div>

<div class="flex-in">
<div class="flex-1">
<img src="/images/coin-optimizilla.jpg" alt="оптимизированная с помощью Optimizilla фотография монеты" width="300" height="298" >
</div>
<div class="flex-1">
<div class="wtf">оптимизировано в&nbsp;Optimizilla, 20,5&nbsp;КБ<br />
настройки онлайн сервиса&nbsp;— по&nbsp;умолчанию</div>
</div>
</div>

<p>Уменьшили размер фото&nbsp;— можно публиковать. В&nbsp;код html-страницы добавляем такую строку: </p>

<pre class="language-terminal highlight ">&lt;img src="путь к&nbsp;изображению" alt="описание,что изображено" width="ширина" height="высота"/&gt;</pre>




<p>Раньше этих действий было достаточно. Сейчас&nbsp;— нет. Назову три причины:</p>


<ul>
	<li>
		<p>Иногда оптимизированные фото на&nbsp;«ретине» выглядят плохо → «ретине» нужно предлагать свои картинки. </p>
	</li>
	<li>
		<p>Появился <a href="https://developers.google.com/speed/webp/" target="_blank" rel="noopener">новый формат изображений&nbsp;— WebP</a>, который делает вес фото еще меньше. Пока формат поддерживается не&nbsp;всеми браузерами → для браузеров, которые «видят» WebP, следует предлагать WebP, а&nbsp;остальным&nbsp;— другие форматы. </p>
	</li>
	<li>
		<p>Чтобы браузеры в&nbsp;смартфонах не&nbsp;отвлекались на&nbsp;адаптацию картинок под размер экрана, нужно предлагать картинки нужного размера сразу. Один размер для смартфонов, другой&nbsp;— для планшетов, третий&nbsp;— для десктопов.</p>
	</li>
</ul>

<p><mark>Вывод:</mark> вместо одной фотографии, одной строчки кода с&nbsp;адресом и&nbsp;описанием следует готовить набор фотографий (разного размера и&nbsp;формата) и&nbsp;указывать в&nbsp;html-коде условия, при которых должна показываться та&nbsp;или иная фотография из&nbsp;набора. Для каждого экрана должно загружаться наиболее релевантное изображение&nbsp;— нужного размера, формата и&nbsp;разрешения.</p>

<h2 id="2">Новое требование: каждому экрану свое изображение </h2>
<p>Принцип «каждому экрану свое изображение» можно реализовать с&nbsp;помощью плагинов: загружаем одну фотографию и&nbsp;плагин автоматически делает копии, меняет размеры и&nbsp;прописывает условия показа. Не&nbsp;нужно сосредотачиваться на&nbsp;технической составляющей работы сайта. Это плюс. </p>

<p>Минусы тоже есть. Во-первых, не&nbsp;все плагины написаны хорошо. Иногда можно здорово проиграть в&nbsp;производительности сайта. Во-вторых, некоторые задачи нельзя решить в&nbsp;автоматическом режиме. Например, кадрирование. Панорамная фотография хорошо смотрится на&nbsp;большом экране, но&nbsp;на&nbsp;смартфоне лучше показать только наиболее значимую часть фотографии. </p>

<p>Показывать разные изображения для разных ситуаций поможет тег &lt;picture&gt;. </p>

<p>Если вы&nbsp;читаете статью со&nbsp;смартфона, ниже вы&nbsp;видите котенка, который спит, свернувшись калачиком. Если читаете с&nbsp;большого экрана&nbsp;— ваш кот зевает и&nbsp;потягивается. Еще есть кот, который сидит и&nbsp;смотрит на&nbsp;вас. Поэкспериментируете с&nbsp;гаджетами или размером окна браузера и&nbsp;убедитесь, что так и&nbsp;есть. </p>

<figure>
<picture>
  <source media="(min-width: 650px)" srcset="/images/kitten-large.png">
  <source media="(min-width: 465px)" srcset="/images/kitten-medium.png">
  <img src="/images/kitten-small.png" alt="a cute kitten" >
</picture>
<figcaption>Пример взят <a href="https://cloudfour.com/examples/img-currentsrc/" target="_blank" rel="noopener">отсюда</a></figcaption>
</figure>

<p>А&nbsp;вот как это работает:</p>


<pre class="language-terminal highlight ">
&lt;picture&gt;<br />
&lt;source media="(min-width: 650px)" srcset="...kitten-large.png"&gt;<br />
&lt;source media="(min-width: 465px)" srcset="...kitten-medium.png"&gt;<br />
&lt;img src="...kitten-small.png" alt="a cute kitten"&gt;<br />
&lt;/picture&gt;
</pre>


<p>Атрибут srcset указывает путь изображения для загрузки. Тег &lt;source&gt; и&nbsp;атрибут media указывают условия появления каждой из&nbsp;картинок. Если ширина экрана больше 650px, показывается зевающий кот, если от&nbsp;465px до&nbsp;650px&nbsp;— кот сидит. Если экран меньше 465px или если браузер не&nbsp;распознает тег &lt;picture&gt;, вы&nbsp;увидите спящего кота. </p>

<p>В&nbsp;блоге Opera есть <a href="https://dev.opera.com/articles/responsive-images/" target="_blank" rel="noopener">15&nbsp;примеров использования тега &lt;picture&gt;</a> (на&nbsp;англ.). Я&nbsp;заглядываю туда как в&nbsp;шпаргалку по&nbsp;синтаксису: какой код нужен, чтобы для ретины загружать изображения с&nbsp;высоким разрешением, чтобы показывать разные фото для разных экранов, чтобы предлагать WebP там, где браузеры распознают этот формат, чтобы все эти условия указать разом для одного изображения. </p>

<h2 id="3">А&nbsp;можно&nbsp;ли проще? </h2>

<p>С&nbsp;тегом &lt;picture&gt; код картинки занимает иногда более 10&nbsp;строк, не&nbsp;говоря уже о&nbsp;том, что нужно вручную подготовить несколько вариантов изображения. Если писать <span class="noperenos">1-2</span> статьи в&nbsp;месяц, это необременительно. А&nbsp;если у&nbsp;вас интернет-магазин с&nbsp;тысячей наименований и&nbsp;соответствующим количеством фотографий? </p>

<p>Однажды я&nbsp;верстал фотогалерею в&nbsp;flexbox. В&nbsp;зависимости от&nbsp;размера экрана ширина фотографий могла занимать любое значение от&nbsp;250px до&nbsp;1200px. Этот диапазон я&nbsp;разбил на&nbsp;интервалы и&nbsp;для каждого подготовил свое изображение со&nbsp;своим размером и&nbsp;форматом. Большой объем ручной работы + неидеальный результат (часто требуемая ширина картинки не&nbsp;совпадала с&nbsp;имеющейся, что расстраивало гугловский pagespeed insight)&nbsp;— все это вынудило меня искать другое решение. И&nbsp;я&nbsp;его нашел&nbsp;— <a href="https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/wtgfrafckbpng93fntsg" target="_blank" rel="noopener">Cloudinary</a>. </p>

<p>C&nbsp;Cloudinary работа по&nbsp;оптимизации изображений сводится к&nbsp;корректировке адреса картинки, загруженной в&nbsp;облако сервиса. Поясню на&nbsp;примере. Давайте войдем в&nbsp;Cloudinary, добавим фотографию монеты из&nbsp;примера выше и&nbsp;скопируем url картинки. </p>

<img src="//res.cloudinary.com/bartoshevich/image/upload/q_auto,f_auto/v1538445318/copy_cloudinary.jpg" alt="пример работы с Cloudinary" width="519" height="478"/>


<p>Адрес фото:</p>


<pre class="language-terminal highlight ">
//res.cloudinary.com/bartoshevich/image/upload/v1538423803/coin_original.jpg
</pre>


<p>Все, что требуется,&nbsp;— это после upload/ в&nbsp;адресе добавить q_auto,f_auto/. Новый адрес:</p>


<pre class="language-terminal highlight ">
//res.cloudinary.com/bartoshevich/image/upload/q_auto,f_auto/v1538423803/coin_original.jpg
</pre>


<p>На&nbsp;этом работа по&nbsp;оптимизации картинки завершена. Сервис автоматически изменит качество и&nbsp;формат изображения в&nbsp;зависимости от&nbsp;экрана, на&nbsp;котором открывают адрес картинки. Не&nbsp;нужно готовить много вариантов изображения, прописывать условия для «ретины» и&nbsp;WebP. Все это уже «зашито» в&nbsp;адресе. Код картинки снова умещается в&nbsp;одну строку. </p>

<p>Ниже — оптимизированная с&nbsp;помощью Cloudinary фотография монеты. Если вы&nbsp;откроете статью в&nbsp;разных браузерах (Firefox и&nbsp;Chrome) и&nbsp;сохраните фото, вы&nbsp;получите фотографии разных форматов и&nbsp;веса. У&nbsp;меня скачанная с&nbsp;Chrome фотография весит всего 10,9&nbsp;КБ&nbsp;— почти в&nbsp;10&nbsp;раз меньше оригинала. Код&nbsp;же&nbsp;— одна строка. Нет &lt;picture&gt;, &lt;source&gt;, media и&nbsp;пр. </p>

<img src="https://res.cloudinary.com/bartoshevich/image/upload/q_auto,f_auto/v1538423803/coin_original.jpg" alt="оптимизированная с помощью Optimizilla фотография монеты" width="300" height="298" >
<p>Сотрудники Cloudinary подготовили <a href="https://cloudinary.com/cookbook">Cookbook</a>, где описывают возможности сервиса: что можно добавить в&nbsp;адрес изображения и&nbsp;какой результат получить. Например, можно улучшить фотографию, если после upload/ написать в&nbsp;адресе e_improve/. Результат:</p>

<img src="https://res.cloudinary.com/bartoshevich/image/upload/e_improve/q_auto,f_auto/v1538423803/coin_original.jpg" alt="оптимизированная с помощью Optimizilla фотография монеты" width="300" height="298" >

<p>Иногда я&nbsp;не&nbsp;могу обходиться без тега &lt;picture&gt;. И&nbsp;если тег комбинирую с&nbsp;Cloudinary, «пропуская» адреса изображений через сервис, я&nbsp;использую больше возможностей оптимизации при минимальных усилиях. </p>
