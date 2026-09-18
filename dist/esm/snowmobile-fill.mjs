export const name="snowmobile-fill";
export const id="dl_905a1a87a4b0455cbe4e";
export const url=new URL("../icons/S/snowmobile-fill.svg?v=75de2750c425f001f42e9d1b08fad0bb1ef3056bcad38936cf2581648768580b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
