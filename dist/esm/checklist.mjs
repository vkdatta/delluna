export const name="checklist";
export const id="dl_ebd93299183960c8bb64";
export const url=new URL("../icons/checklist.svg?v=a9e183f8791efff16ba9da616f3a6aafd39442d57231130691bfd820a756d336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
