export const name="virus";
export const id="dl_c25f8c197e3e49f0afc8";
export const url=new URL("../icons/virus.svg?v=14ca8dc7005eba7b22f814effa515e2fdebacd6cc82377984b9ccd1a4ee38f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
