export const name="lucid_3-octagon-alert";
export const id="dl_10638f22d70b4df49800";
export const url=new URL("../icons/lucid_3-octagon-alert.svg?v=af4b04644ccbd11d38703289abbb8157d4f65d3f4561bdbbb9d175e99a4b118e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
