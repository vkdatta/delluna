export const name="lucid_2-lock-keyhole";
export const id="dl_42d8546126d344d194f3";
export const url=new URL("../icons/lucid_2-lock-keyhole.svg?v=7d0a8dd77bcbec8f241300ffc58caf978650c1e618b4aa37946617a4622d8d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
