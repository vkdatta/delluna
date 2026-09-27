export const name="subtitles-slash";
export const id="dl_1d7bce39374bc7ad2d6c";
export const url=new URL("../icons/subtitles-slash.svg?v=23da8c6408c1aaee9a1df3b1674900654c2c87afb69f6af2c48d4d35174824aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
