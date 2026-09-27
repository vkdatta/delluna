export const name="smiley-wink-bold";
export const id="dl_045676c25204459653e7";
export const url=new URL("../icons/smiley-wink-bold.svg?v=d7a855e459cd9ce985e99c3e2ae996edaf7e002906f43f8ff75cce2740fcb298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
