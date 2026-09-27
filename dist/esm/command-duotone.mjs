export const name="command-duotone";
export const id="dl_5684c09964d2432291da";
export const url=new URL("../icons/command-duotone.svg?v=272c9605755856213b480a4a388c3eb13541e082ee4c88b7cea240d2dc40d1f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
