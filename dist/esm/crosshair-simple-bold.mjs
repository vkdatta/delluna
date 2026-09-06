export const name="crosshair-simple-bold";
export const id="dl_876cee174b30407a89da";
export const url=new URL("../icons/crosshair-simple-bold.svg?v=6ab86ae522bc309668b20d7d5a60face7c9cd720d15c480e7b15e918c630389d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
