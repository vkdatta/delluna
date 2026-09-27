export const name="lucid_2-face-grinning";
export const id="dl_d8ca2443b3f44ca69881";
export const url=new URL("../icons/lucid_2-face-grinning.svg?v=9b5cb9054891a593140fcda827baffc3740f93154e220575a63a3eb3a390a7d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
