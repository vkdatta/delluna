export const name="bucket_check";
export const id="dl_7512bbbb9eeb090fcddc";
export const url=new URL("../icons/bucket_check.svg?v=000e55758bdb8d0784d31b2e553bb4d486abae5f2cd196d807b1f4770fb0c04e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
