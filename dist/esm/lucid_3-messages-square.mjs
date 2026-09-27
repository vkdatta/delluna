export const name="lucid_3-messages-square";
export const id="dl_8927e2ff46ca41dd925d";
export const url=new URL("../icons/lucid_3-messages-square.svg?v=2aa1e7ab6602ef1523c73b09fe97bf801740aca48828f56af77dc7ca4a7a9c8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
