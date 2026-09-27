export const name="lucid_2-face-slightly-frowning";
export const id="dl_443ccb1c8d67491491e2";
export const url=new URL("../icons/lucid_2-face-slightly-frowning.svg?v=d46cf3a2cb044eca89d5a7a94f55285da2e456a27c2c64fc8d426c4530f47607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
