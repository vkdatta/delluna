export const name="computer_arrow_up";
export const id="dl_0e0ded47ebe849beae56";
export const url=new URL("../icons/computer_arrow_up.svg?v=8a20e0e5bab78afd72ae2a62275dc1ceefd6d7cc235f9386c02ae9f607cd70fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
