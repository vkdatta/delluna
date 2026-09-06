export const name="caret-line-down";
export const id="dl_b568c75c45914327af1d";
export const url=new URL("../icons/caret-line-down.svg?v=7ca37e89352e8f3f6792f0d4c50f3f0b51f4d121113744e61c822b91e9a2f00d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
