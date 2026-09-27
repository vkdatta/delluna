export const name="lucid_3-shield-cog";
export const id="dl_650b3be775be45ed86f8";
export const url=new URL("../icons/lucid_3-shield-cog.svg?v=ac69251e1478dcc16d2aafddf19a1f092889d6624963938f1a96b54540b862c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
