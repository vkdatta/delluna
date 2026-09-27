export const name="boat_railway-fill";
export const id="dl_5b36537bf95ce6aeffd0";
export const url=new URL("../icons/boat_railway-fill.svg?v=571bd1628aeff3462e58c6bf5e27d824de8d966879d6ee0f0c47967e1e4d4634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
