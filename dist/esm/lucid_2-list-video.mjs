export const name="lucid_2-list-video";
export const id="dl_e4df14f46a404a97957e";
export const url=new URL("../icons/lucid_2-list-video.svg?v=859c803e34665ec11d16f65f23389c36e917d0c81c6fe7de70dc70e5d2a3e78b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
