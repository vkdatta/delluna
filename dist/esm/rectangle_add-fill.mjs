export const name="rectangle_add-fill";
export const id="dl_2017cdcc747747c6b1fa";
export const url=new URL("../icons/rectangle_add-fill.svg?v=531c55297dab4d09ae94895e0cfa8e03fa7b04bc799b5e59cb471334885e5d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
