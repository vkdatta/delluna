export const name="lucid_3-music-2";
export const id="dl_a38e9ef8d772475b8014";
export const url=new URL("../icons/lucid_3-music-2.svg?v=7214d2652380ccfeab3d71d67141cf7a833a78582d8ff65b0d30ff8d1309c75f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
