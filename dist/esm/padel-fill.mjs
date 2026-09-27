export const name="padel-fill";
export const id="dl_b4058b60e3a843dcab1e";
export const url=new URL("../icons/padel-fill.svg?v=90abc6a9df06dc285b9fbbf8ad1cb599b0e6e455bcfda6e2632a20ae60c35f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
