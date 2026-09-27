export const name="rsvp-fill";
export const id="dl_4f503694f03a921754b2";
export const url=new URL("../icons/rsvp-fill.svg?v=3333c00e6d1699e8d60d9e2f095f475743171a79c1b60e54a48654bccf4003ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
