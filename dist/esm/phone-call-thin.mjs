export const name="phone-call-thin";
export const id="dl_37c3b15a8c244f51b76f";
export const url=new URL("../icons/phone-call-thin.svg?v=8e6469aa68fea1ce94bd38c031fe043b32d707216bd3b2aa4742a52d1abe4e32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
