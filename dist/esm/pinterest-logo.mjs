export const name="pinterest-logo";
export const id="dl_1e9518053712466eae90";
export const url=new URL("../icons/pinterest-logo.svg?v=8aa08e7f4082180d58e696e0b894b3a240d284173d50f508e3700a65b4f37c89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
