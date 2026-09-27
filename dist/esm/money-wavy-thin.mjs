export const name="money-wavy-thin";
export const id="dl_c352cf6701994d2592e2";
export const url=new URL("../icons/money-wavy-thin.svg?v=9b01d87bb670d205ecbc6efd1f7d75e67d5f8846460067d77663860e4a2a18b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
