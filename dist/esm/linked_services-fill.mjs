export const name="linked_services-fill";
export const id="dl_f4e3db9d21790a579d65";
export const url=new URL("../icons/linked_services-fill.svg?v=e4bf79a563d7c02c6b1fc44c543cb4ff79a7408f567d7456a9ad2e6b123d0f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
