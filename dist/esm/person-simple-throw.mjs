export const name="person-simple-throw";
export const id="dl_eb7cdcbdb8654373a2c7";
export const url=new URL("../icons/person-simple-throw.svg?v=49df6df4a39cac4a2fb5de3e1c5fba1a76b1b865666fab85e663afc7cb99c981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
