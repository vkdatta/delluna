export const name="lucid_3-mic-off";
export const id="dl_5d211a81cb3248afa3c2";
export const url=new URL("../icons/lucid_3-mic-off.svg?v=7958b68ff5e28b8395bbf812983c2bf8eb5a501a0a0b4a08b03e79211179c1d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
