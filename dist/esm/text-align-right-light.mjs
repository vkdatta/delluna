export const name="text-align-right-light";
export const id="dl_995b0e7cfbf1c26b63ed";
export const url=new URL("../icons/text-align-right-light.svg?v=2bb9bde16cabf1f4ba3ca0699d396c469863a829058c5e616c327bc7df0521e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
