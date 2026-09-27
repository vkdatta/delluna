export const name="crown-cross";
export const id="dl_afd74669e30d46189499";
export const url=new URL("../icons/crown-cross.svg?v=92e829b3eeba7272d67639d0988bfe23494a7ec74d08d309c2d04249a39aa801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
