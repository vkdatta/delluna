export const name="lucid_3-party-popper";
export const id="dl_9989bd2242ab4342a903";
export const url=new URL("../icons/lucid_3-party-popper.svg?v=b503de0ef2c837ae35e0f2f5e62ca487336d83b24c2da816157475b2d4b3788b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
