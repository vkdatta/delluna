export const name="position_bottom_right-fill";
export const id="dl_d7c6ebf457c14fecb798";
export const url=new URL("../icons/position_bottom_right-fill.svg?v=0385040288d11b7fcaaf04d9d9463c8d62997f09e08425c31fb60d633e736088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
