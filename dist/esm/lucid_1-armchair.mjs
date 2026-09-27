export const name="lucid_1-armchair";
export const id="dl_b7a2a7a288dc459aba9c";
export const url=new URL("../icons/lucid_1-armchair.svg?v=4502a83987933f516f5da9f528253c274e209d46ca02992c1a7c3bfccd25559f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
