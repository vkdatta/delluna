export const name="code_blocks-fill";
export const id="dl_9f47ecf87f304fce9111";
export const url=new URL("../icons/code_blocks-fill.svg?v=a3e4b7773e106fd829ba8f4200ccce7d20a84ee67b847d5d86f90e0fd04237d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
