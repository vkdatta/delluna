export const name="lucid_2-kayak";
export const id="dl_ca1fd80f00364880af79";
export const url=new URL("../icons/lucid_2-kayak.svg?v=a5dd3b205ba014b775bfe4060f0c42aad5ef270ee87ec44c33d43432962284c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
