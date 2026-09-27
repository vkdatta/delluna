export const name="subway_walk-fill";
export const id="dl_cf59a191b96fdf3025de";
export const url=new URL("../icons/subway_walk-fill.svg?v=3bb80a1cdc0641d5cbd0a349662b42931865c1b2a76115cb3d27d85fa748cb97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
