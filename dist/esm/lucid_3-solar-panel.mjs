export const name="lucid_3-solar-panel";
export const id="dl_1b6242b3fb49404cb7f9";
export const url=new URL("../icons/lucid_3-solar-panel.svg?v=90ae7c5b5020b99e314bcb08b6a1aa9e4840f524c283c14dcf1151f8ff7b46fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
