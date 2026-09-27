export const name="user-circle-gear-fill";
export const id="dl_930bb0a67dc19550625e";
export const url=new URL("../icons/user-circle-gear-fill.svg?v=9708ed0241c42cef3fbbf6cb894cdf07e017f3a706a8594259d1bba1901f35de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
