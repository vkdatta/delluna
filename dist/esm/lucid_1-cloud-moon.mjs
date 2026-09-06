export const name="lucid_1-cloud-moon";
export const id="dl_4eae36cb2ee8463e8d1f";
export const url=new URL("../icons/lucid_1-cloud-moon.svg?v=fb5ba3b75aba4358547e27d5f4974d61fdfc068ad3d696501fe89bb012df773b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
