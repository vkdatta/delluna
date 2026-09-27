export const name="humidity_high-fill";
export const id="dl_11eee8f9158ce63c6559";
export const url=new URL("../icons/humidity_high-fill.svg?v=ba95aa8b49db27e0d8e76bdbc2fd0429a577a7eb47998eced3cd313b554ca17d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
