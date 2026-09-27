export const name="traffic-sign-fill";
export const id="dl_e8aa92f8a39391bf80b8";
export const url=new URL("../icons/traffic-sign-fill.svg?v=8c62d4b926b537a60b2950d98cf84fab6bf9a0bee5718eaf2a3aa54952b40ef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
