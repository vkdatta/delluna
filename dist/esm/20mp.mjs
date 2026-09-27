export const name="20mp";
export const id="dl_8d14bce55861c5f96d81";
export const url=new URL("../icons/20mp.svg?v=f558cd474ea7c1c611b28177bba0f24b703c8f26882a30dd8c6b9dfcd9209702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
