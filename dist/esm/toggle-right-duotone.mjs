export const name="toggle-right-duotone";
export const id="dl_c065102d9a1550f08c6e";
export const url=new URL("../icons/toggle-right-duotone.svg?v=7360bd9b0337fa2241c544a4d468b145d337beb2be74a7bfe1c8ce21dc63c16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
