export const name="unlicense-fill";
export const id="dl_642c44a40bad31b6ac5e";
export const url=new URL("../icons/unlicense-fill.svg?v=3ff723f5dd22f573d148cd3dc3bc69cb95ef44e5a4090c9f8472de4e22ce5005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
