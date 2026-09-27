export const name="inventory_2";
export const id="dl_519682a224a0ae1ccda1";
export const url=new URL("../icons/inventory_2.svg?v=866413597c29e6208ae62d18d055e4cae86dbb630ad1a93c0da74c118264e920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
