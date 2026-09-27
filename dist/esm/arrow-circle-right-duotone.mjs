export const name="arrow-circle-right-duotone";
export const id="dl_979b4fe2322b41598de9";
export const url=new URL("../icons/arrow-circle-right-duotone.svg?v=5bcc07d65b1a48d55512bedf2f1c4a06604475abaa0cd3b84b466d88f6c1de56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
