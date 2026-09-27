export const name="note-pencil-duotone";
export const id="dl_e52bd37a2b41459eae79";
export const url=new URL("../icons/note-pencil-duotone.svg?v=b438935e6430d3d0cde2db8505ba2478d3731fb71f3736727ad5f90038291478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
