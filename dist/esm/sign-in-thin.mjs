export const name="sign-in-thin";
export const id="dl_7a722f26f8e2449c98a4";
export const url=new URL("../icons/S/sign-in-thin.svg?v=d0e600c2e97615d0c2cd7c3c17e7c257315a8954c2328d00c0aeb37b40903a12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
