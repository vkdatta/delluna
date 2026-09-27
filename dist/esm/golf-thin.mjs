export const name="golf-thin";
export const id="dl_3527ae0df24947d98f36";
export const url=new URL("../icons/golf-thin.svg?v=13427c20e0fe32a3a5ee679040e531a456c04c726ce1b5df7ec5d3bcc58b09ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
