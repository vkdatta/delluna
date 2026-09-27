export const name="ticket-check";
export const id="dl_55f47d20a74f4cc191b5";
export const url=new URL("../icons/ticket-check.svg?v=60cdd182a42aa601041e53cb8295f9a1ecb4b446c84db4f2d92accefe042976a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
