export const name="app_registration";
export const id="dl_283d946c91c0d7530973";
export const url=new URL("../icons/app_registration.svg?v=541fda965dceb2fb29d12a2e3a1a20a806246b0cfb0c2b0f8c4cd31090fc00e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
