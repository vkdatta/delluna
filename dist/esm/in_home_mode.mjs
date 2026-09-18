export const name="in_home_mode";
export const id="dl_966a7956719b4e12a5cc";
export const url=new URL("../icons/in_home_mode.svg?v=6642e72c332148be5aaea612fcb139a8ccbe40d278ef8073e48e605c71d3df08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
