export const name="lucid_2-folder-dot";
export const id="dl_e0306f3c2aa24b7c8083";
export const url=new URL("../icons/lucid_2-folder-dot.svg?v=4d5f17fa43832b6878fe6500aba59dc9d097bf44ec40ab20ba087ca89ec7e07b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
