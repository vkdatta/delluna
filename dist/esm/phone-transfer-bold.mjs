export const name="phone-transfer-bold";
export const id="dl_468b3f86b5d64031825e";
export const url=new URL("../icons/phone-transfer-bold.svg?v=f3716251b8df65e23991c9c337c2bede081b17a4013af3f75e3ae386983cdf5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
