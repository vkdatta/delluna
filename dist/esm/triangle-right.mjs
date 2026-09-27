export const name="triangle-right";
export const id="dl_63793fbbcb3546d4bcaa";
export const url=new URL("../icons/triangle-right.svg?v=9bf24b58477b2bac7360367c7a70a6938829981743713528fd6f720031dc8b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
