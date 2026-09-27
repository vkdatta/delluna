export const name="tv_next";
export const id="dl_6c729d8ab2fd7b00fb12";
export const url=new URL("../icons/tv_next.svg?v=b31db671a0bbc9893d8f75dbef0acab9759494edb29f95cc6df2211bc25c6d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
