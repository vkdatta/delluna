export const name="lucid_3-music-2";
export const id="dl_a38e9ef8d772475b8014";
export const url=new URL("../icons/lucid_3-music-2.svg?v=87ba0c6a2b8fd14ea4cc432667ecf63337aaac2336ec21dcfe58e3d265257479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
