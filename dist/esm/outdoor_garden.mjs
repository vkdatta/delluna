export const name="outdoor_garden";
export const id="dl_0b69c748e7db6b698e4a";
export const url=new URL("../icons/outdoor_garden.svg?v=6b0e3c89959fcff94df7d7124a6a1550d193d09df4d0a8bb2ad940054d5d06c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
