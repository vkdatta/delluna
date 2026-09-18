export const name="attach_email";
export const id="dl_d868ddd1bae6477982f3";
export const url=new URL("../icons/attach_email.svg?v=e71ab014e07f452250debb8a380c7fa50524241051d71f2649c21215f35560a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
