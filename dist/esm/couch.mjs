export const name="couch";
export const id="dl_a3f4d6e264794851ac23";
export const url=new URL("../icons/couch.svg?v=bee5609f61d4ccea5858ec246377dc5210580d0846811b180323d2ffe7f9ab57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
