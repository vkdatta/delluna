export const name="bottom_sheets";
export const id="dl_bc802418af9baa302e74";
export const url=new URL("../icons/bottom_sheets.svg?v=65682b13be0dfd87a63308ef3e2e13f1ad1c9f47bd04bd5ce2b3aad03cc10a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
