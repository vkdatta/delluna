export const name="headset";
export const id="dl_1718bcf5f63c4a9e81f1";
export const url=new URL("../icons/headset.svg?v=89ddc3974d0d36e96ea4ffb061d0766b139f8baa4906150081347cc19733b73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
