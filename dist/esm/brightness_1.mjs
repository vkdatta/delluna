export const name="brightness_1";
export const id="dl_e04eef1809ccf0ade499";
export const url=new URL("../icons/brightness_1.svg?v=b97c639c62dbb54648a69b262833e63bff5cc5e858d4f7f93c78de9470f08f84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
