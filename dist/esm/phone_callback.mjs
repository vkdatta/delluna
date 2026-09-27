export const name="phone_callback";
export const id="dl_cd478201492c5a0ecaba";
export const url=new URL("../icons/phone_callback.svg?v=4a9fc7a45c0ca353042e4e1c6618c65dff4be6728f1f8a8bc0e7d187f9e235e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
