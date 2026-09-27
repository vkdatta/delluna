export const name="lucid_1-captions";
export const id="dl_31ec37c7ed8946698794";
export const url=new URL("../icons/lucid_1-captions.svg?v=350d8e34bc1d4523ba85ff16333188cbdb7be425f0c149bf3863bb4422f6e4e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
