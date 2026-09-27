export const name="reset_focus-fill";
export const id="dl_c21d84785792e988b91b";
export const url=new URL("../icons/reset_focus-fill.svg?v=9da8d38de1e622ea331abf9d16a208f5397019bb4cad18e2a65c270f4cd7655f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
