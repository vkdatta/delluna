export const name="arrow-elbow-left-up-fill";
export const id="dl_89d5ff13ce164340a6a5";
export const url=new URL("../icons/arrow-elbow-left-up-fill.svg?v=0df3405ba43d53ae651884691a4b8619a02aa679ee1564de669794add6da8c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
