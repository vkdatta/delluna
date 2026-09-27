export const name="trash-fill";
export const id="dl_6f50f693e5d029a750ec";
export const url=new URL("../icons/trash-fill.svg?v=c7f3ba9b580afb3e27d6d29012f766df62ad85164aef993c5b16770a8c07cd06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
