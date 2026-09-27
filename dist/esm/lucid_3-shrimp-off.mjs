export const name="lucid_3-shrimp-off";
export const id="dl_dea801c9f26b4506a1ed";
export const url=new URL("../icons/lucid_3-shrimp-off.svg?v=485f5a7061bcc5dcc2bbc089923d7a4e8373b7d91d07dd1e1d447eb99ad9d72b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
