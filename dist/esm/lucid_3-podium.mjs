export const name="lucid_3-podium";
export const id="dl_c0f52e7c3bb84b1fa773";
export const url=new URL("../icons/lucid_3-podium.svg?v=c1b5b495cffdb94ef556db558c9c5ccb248c468bed5217b7dc34cb7671b1b92e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
