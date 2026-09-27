export const name="smiley-angry-bold";
export const id="dl_3db4a17ff9bf67c081c5";
export const url=new URL("../icons/smiley-angry-bold.svg?v=e785ae8fa7faec3a706c299dec763954f8c4688bed289f7d859fa9052b43debe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
