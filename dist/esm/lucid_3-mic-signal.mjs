export const name="lucid_3-mic-signal";
export const id="dl_7f63ebb6b35141609374";
export const url=new URL("../icons/lucid_3-mic-signal.svg?v=b2eef8fd0b9b5a6d80ef6a9b7f0ef9c5346fe7860c36e4ae31905c6b3d866311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
