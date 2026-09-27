export const name="autoplay";
export const id="dl_ce775dfbcca8a6948b83";
export const url=new URL("../icons/autoplay.svg?v=432eee75a6a6d7fb71da0e3572a6bcf02e9d5e2186eea0d993086b29810ba9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
