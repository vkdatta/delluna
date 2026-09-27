export const name="child_hat-fill";
export const id="dl_4fbb44e1c169bed1a0c9";
export const url=new URL("../icons/child_hat-fill.svg?v=5ffed62f52aa60d40d60fb3e84219eb41b3e9358e9f6f4defa29634a6a97f783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
