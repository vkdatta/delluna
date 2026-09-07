export const name="beach-ball-fill";
export const id="dl_c35b8dfc1a8f438594e3";
export const url=new URL("../icons/beach-ball-fill.svg?v=50b5b4ac56417097d4750547309e342f9931d46c1b57d39fe207c6de87423c8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
