export const name="pinch_zoom_in-fill";
export const id="dl_35d55cc227ace83a9cb2";
export const url=new URL("../icons/pinch_zoom_in-fill.svg?v=eda67c006604aed55eae0d537917ce327125c5ab1a912528cd76f8ce26c81310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
