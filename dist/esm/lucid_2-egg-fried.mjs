export const name="lucid_2-egg-fried";
export const id="dl_5f42bf55c6ed45c78d85";
export const url=new URL("../icons/lucid_2-egg-fried.svg?v=8ccd30faa1a78e397685f60075570f26f42d46a671a4b75f0e35fc96bdfa3270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
