export const name="phone-call-thin";
export const id="dl_37c3b15a8c244f51b76f";
export const url=new URL("../icons/phone-call-thin.svg?v=7d0e942a6128eb883ee6b56459589de064c52465411a9aea314b3df7aae15a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
