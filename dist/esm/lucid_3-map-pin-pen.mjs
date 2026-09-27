export const name="lucid_3-map-pin-pen";
export const id="dl_cb2009bccf784cb6bb66";
export const url=new URL("../icons/lucid_3-map-pin-pen.svg?v=4115b109bf5ffcf807efc0f5ccc19a7e04f12f5d6f5e5fb09cfb222bf0eea040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
