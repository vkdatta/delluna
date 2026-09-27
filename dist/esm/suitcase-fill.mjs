export const name="suitcase-fill";
export const id="dl_b16e41b71434fc8772d2";
export const url=new URL("../icons/suitcase-fill.svg?v=3cb33e5ca00e9008bd19f1238c476400ea85c4fc11735d01788542621b23c8c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
