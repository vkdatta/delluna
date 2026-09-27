export const name="lucid_1-clipboard-x";
export const id="dl_bb1ba7776fca4d4198a1";
export const url=new URL("../icons/lucid_1-clipboard-x.svg?v=7bac826aad6ec693656dd4a3891699ad8eefa551339b5d2649d3dcdc0ffc9f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
