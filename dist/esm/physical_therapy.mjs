export const name="physical_therapy";
export const id="dl_5819da1a0e6c41f791fe";
export const url=new URL("../icons/physical_therapy.svg?v=5a9a5abf3e8b260cec6f60059e027a22df585dfe957bef22fd158806a25c161a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
