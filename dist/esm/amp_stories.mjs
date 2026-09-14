export const name="amp_stories";
export const id="dl_cd9fbb414b4241459247";
export const url=new URL("../icons/A/amp_stories.svg?v=507d5d5fa4bca3265df0c01c6ef266a65472e1eebab62b88bfd96ab021fb4619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
