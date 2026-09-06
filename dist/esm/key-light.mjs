export const name="key-light";
export const id="dl_19c6e2758d41471ebac8";
export const url=new URL("../icons/key-light.svg?v=d14ac6d7e9fd0da23806350a1477393f1e8866b10947830c2efd155f6d59894b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
