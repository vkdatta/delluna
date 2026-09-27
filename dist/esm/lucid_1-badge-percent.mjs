export const name="lucid_1-badge-percent";
export const id="dl_8020aa52a30947cda08e";
export const url=new URL("../icons/lucid_1-badge-percent.svg?v=48cac2b1d122758872660888e7e1261ac3aebdfe99b8e1634a40ac1ede13d751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
