export const name="text-initial";
export const id="dl_a22c50ad5704498da77a";
export const url=new URL("../icons/text-initial.svg?v=e04349c459c03eb534c7e9f878eb5b3cbeb11e542842e2b6c0dfd515a71daaee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
