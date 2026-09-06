export const name="file-archive-duotone";
export const id="dl_474853a4b11c4d6286b1";
export const url=new URL("../icons/file-archive-duotone.svg?v=5fae5d5a082f13ec817a175ece3edcc7e644bd6469a300340c59890781995ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
