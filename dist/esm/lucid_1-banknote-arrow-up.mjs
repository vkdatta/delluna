export const name="lucid_1-banknote-arrow-up";
export const id="dl_0b02d99570dd48a39a7e";
export const url=new URL("../icons/lucid_1-banknote-arrow-up.svg?v=30d111cf691cb24d188fecccaba5281bbf4a13f7f348a3d6ec2a1f568cbc6bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
