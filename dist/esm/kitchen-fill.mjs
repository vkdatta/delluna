export const name="kitchen-fill";
export const id="dl_66210c06aa2fb2f36839";
export const url=new URL("../icons/kitchen-fill.svg?v=810675b2884ac582070d080e8d134b1ecd1ca2a92e070dae8572e3b52c1d3376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
