export const name="multiple_airports-fill";
export const id="dl_a311bd1d3da0c2a22d67";
export const url=new URL("../icons/multiple_airports-fill.svg?v=3e92ac8ce9a49a22618b9a94c5d50d1eea0b587d5bc332a189a10930958a4e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
