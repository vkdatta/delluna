export const name="smiley-sticker";
export const id="dl_d5fc5f4e6b0d5ebbaf41";
export const url=new URL("../icons/smiley-sticker.svg?v=4e032dc88e54f89e159cb84f2c36c2936d3862e6c1716c7369bc2a6995ee8815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
