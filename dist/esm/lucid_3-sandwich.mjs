export const name="lucid_3-sandwich";
export const id="dl_be6a06c6657143648358";
export const url=new URL("../icons/lucid_3-sandwich.svg?v=639a8c6a7fffddb283fcb50f8d47e6cf716d15f8b54f00d1624420ef395b5394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
