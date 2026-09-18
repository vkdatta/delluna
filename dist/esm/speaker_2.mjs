export const name="speaker_2";
export const id="dl_0176e9ccb96a42c2acab";
export const url=new URL("../icons/speaker_2.svg?v=ce0957714b245e4dba807c55361c0ac11b280bded4fc12e5c58e23344e7492ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
