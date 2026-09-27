export const name="smiley-melting-light";
export const id="dl_46205771540cf5a0fc69";
export const url=new URL("../icons/smiley-melting-light.svg?v=ba5a1681dc65abf20b51d1fa71dcf08e7ec16fc133c8196a3e016efa92456a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
