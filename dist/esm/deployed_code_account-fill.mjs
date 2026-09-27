export const name="deployed_code_account-fill";
export const id="dl_2acbdbd07fb0bafd19bd";
export const url=new URL("../icons/deployed_code_account-fill.svg?v=42580078e69811da3e00edbfb0ea01d4051116611eea97d27d6ef47d02b10e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
