export const name="frame_bug-fill";
export const id="dl_11e4fe4b1bfa43e588be";
export const url=new URL("../icons/frame_bug-fill.svg?v=241a7c76aa8419c5bd1f45a72f52b2b352a95228bf222c48b12916f453553570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
