export const name="funnel-fill";
export const id="dl_902763ea3f874b7da46b";
export const url=new URL("../icons/funnel-fill.svg?v=fd3cd3e6c43a5f76b34e1bb987061c7bff95133d94d4d72668c123e782747417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
