export const name="deployed_code-fill";
export const id="dl_2309453ad4bc423dd56f";
export const url=new URL("../icons/deployed_code-fill.svg?v=72cfa43f53f625c26e3c459b5357a3f45fd7661d2a66d05a050f716a23ee0c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
