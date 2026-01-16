const stories = [
  {
    id: 1,
    title: "القصة الأولى",
    category: "غموض",
    excerpt: "كان يا ما كان في قديم الزمان...",
    content: "فتاة تدعى ايمان كانت غبية جدا وسادجة بشكل لايوصف ولكن كانت رائعة الجمال كان يا ما كان في قديم الزمان، في قرية صغيرة، حدث أمر غريب لم يتوقعه أحد..."
  },
  {
    id: 2,
    title: "ظل في الظلام",
    category: "رعب",
    excerpt: "في ليلة مظلمة، سمعت طرقًا على الباب...",
    content: "في ليلة مظلمة، سمعت طرقًا خفيفًا على الباب، لكن عندما فتحته لم يكن هناك أحد..."
  }
];

const container = document.getElementById("stories");

if (container) {
  stories.forEach(story => {
    container.innerHTML += `
      <div class="story-card" onclick="openStory(${story.id})">
        <h2>${story.title}</h2>
        <p class="category">${story.category}</p>
        <p>${story.excerpt}</p>
      </div>
    `;
  });
}

function openStory(id) {
  window.location.href = "story.html?id=" + id;
}
