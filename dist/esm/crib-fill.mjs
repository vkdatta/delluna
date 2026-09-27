export const name="crib-fill";
export const id="dl_b6fc9c0b3c109ac7cb98";
export const url=new URL("../icons/crib-fill.svg?v=10ea56684819e1bde4a48241a4d05b80e2139eaf8b8b57d7b9f2bee60c4f2570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
