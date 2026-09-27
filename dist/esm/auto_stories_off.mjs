export const name="auto_stories_off";
export const id="dl_0f6124ca32745a0c7987";
export const url=new URL("../icons/auto_stories_off.svg?v=1b10b4a49f98523c1ba4fe6e5879690c28332363e639b0a7cc3b29d9fa8fa12a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
