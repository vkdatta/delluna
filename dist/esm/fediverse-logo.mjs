export const name="fediverse-logo";
export const id="dl_9c5bfba8405743f0b21a";
export const url=new URL("../icons/fediverse-logo.svg?v=5371616b36717c12e71dc2fb607593b285dd8b298ad5925e55ba922769c98aeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
