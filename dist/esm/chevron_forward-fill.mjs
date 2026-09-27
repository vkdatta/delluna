export const name="chevron_forward-fill";
export const id="dl_42cd1b41bc3c15d30894";
export const url=new URL("../icons/chevron_forward-fill.svg?v=2ced974b4847e257c0efb6872bcb8e56f0b9d24f034df9b040588d9703f6ed20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
