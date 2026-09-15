export const name="emergency_share_off";
export const id="dl_861ed0ebeadc48deb0e9";
export const url=new URL("../icons/E/emergency_share_off.svg?v=f49628229689bb285d84c2795a150a74c1b60ed8a61153e0e48270b3a67f19fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
