export const name="lucid_2-door-stairwell";
export const id="dl_757ee530cc324a02a8c6";
export const url=new URL("../icons/lucid_2-door-stairwell.svg?v=b39e4a55bfb04808c510a0a45ee8fa719abfb8a9330bb4d65675074e0b0c3662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
