export const name="wall-thin";
export const id="dl_8acdb8e74a5e0203509c";
export const url=new URL("../icons/wall-thin.svg?v=049245e613aab61b15f54d679398f426089caea837d25e63120448bda3997b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
