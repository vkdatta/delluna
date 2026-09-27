export const name="lucid_3-share-2";
export const id="dl_dd3e4e94c5a0404cb415";
export const url=new URL("../icons/lucid_3-share-2.svg?v=eb7227c2532b3b10ea2166c390952ce163e6c88792fc1a5237884c6cfd6d74a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
