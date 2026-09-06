export const name="number-square-nine-fill";
export const id="dl_5b78cefd661248498100";
export const url=new URL("../icons/number-square-nine-fill.svg?v=296046bf0c2addec6443b31099c6d69a0e37e57ffd9a3d644e725635c350926b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
