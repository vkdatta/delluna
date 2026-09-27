export const name="deployed_code_alert-fill";
export const id="dl_695a047bcac46c46fc7b";
export const url=new URL("../icons/deployed_code_alert-fill.svg?v=9e27babd6186adff3ed44d7bcb612264635ebb5aff37af5e05c3a2e40b739e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
