export const name="lucid_1-circle-parking";
export const id="dl_fa4d6847f9b84cf7a36f";
export const url=new URL("../icons/lucid_1-circle-parking.svg?v=09b07502db6ee6fd5d5095f21d1fc84e84d319693d594f3a7d22603483739ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
