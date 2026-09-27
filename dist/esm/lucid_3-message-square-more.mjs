export const name="lucid_3-message-square-more";
export const id="dl_66ae719ede0c4cfe859b";
export const url=new URL("../icons/lucid_3-message-square-more.svg?v=2f9db39ac4b4e31bb503be7a6966d487f9286174473e3e868e69f053119efdf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
