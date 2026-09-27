export const name="ring_volume";
export const id="dl_4beca088a0076b6d9e27";
export const url=new URL("../icons/ring_volume.svg?v=b8a1ff4e00a659b9f87c0a3a16238816d0ef38672d3c6dc528b5b0ec4f1d0583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
