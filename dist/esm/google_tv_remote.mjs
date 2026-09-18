export const name="google_tv_remote";
export const id="dl_18c5a550730545919b78";
export const url=new URL("../icons/G/google_tv_remote.svg?v=f9934626c427c0548e2be98826a0507d62abb0cae1207e71b1048bc504ed044f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
