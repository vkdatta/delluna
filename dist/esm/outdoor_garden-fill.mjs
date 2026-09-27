export const name="outdoor_garden-fill";
export const id="dl_5521ebd4eb4cb7bd524b";
export const url=new URL("../icons/outdoor_garden-fill.svg?v=94fa99f21041d0fc8881bb53ec04bc062cb85f0691aaa66cad1e434f321bba2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
