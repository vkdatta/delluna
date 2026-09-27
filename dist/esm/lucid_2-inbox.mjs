export const name="lucid_2-inbox";
export const id="dl_8a60cd881e9b47b9a342";
export const url=new URL("../icons/lucid_2-inbox.svg?v=c12639e08721196ea155e82e3a334c9c8d91479673192fbda48ee820023cd2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
