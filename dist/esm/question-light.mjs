export const name="question-light";
export const id="dl_a7632a81e3f5454e9580";
export const url=new URL("../icons/question-light.svg?v=1c3c2eacf783239cd62573829f8dc0a0c4a9f34709225d326806be8e03b9aae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
