export const name="lucid_3-square-arrow-right-enter";
export const id="dl_6f370a47b2e14feaa84e";
export const url=new URL("../icons/lucid_3-square-arrow-right-enter.svg?v=dc3d021703665cb117c70ea61c03d8a503d30f22a5a3426e3bc6ca3fb06a1b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
