export const name="lucid_3-music";
export const id="dl_e0ee30c8541146b3b5ca";
export const url=new URL("../icons/lucid_3-music.svg?v=c4f44a2951e6b3d365ad75873978fb801cd8aa6b99dfb5a26e7e8f922844d52f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
