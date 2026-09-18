export const name="local_see";
export const id="dl_4028a54a77ac4894b94e";
export const url=new URL("../icons/local_see.svg?v=fd8c884e9afce4b46f902ec9eb4129a99e790d0a157c3cc6163a7fb560971240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
