export const name="lucid_1-cake";
export const id="dl_4953a25b994a44828324";
export const url=new URL("../icons/lucid_1-cake.svg?v=b4829f57249c6cc6add0f1b158c886b1e2eada414c5568a2e0462e539e19b283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
