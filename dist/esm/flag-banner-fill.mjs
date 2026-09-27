export const name="flag-banner-fill";
export const id="dl_d235bc95eac2420e8f85";
export const url=new URL("../icons/flag-banner-fill.svg?v=11e5b63ab0587651d2ae18e938bae16e85b30b44715dbc27988373a472c59c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
