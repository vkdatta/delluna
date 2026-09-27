export const name="domain_disabled-fill";
export const id="dl_fe41e84fe0c0b0efe9da";
export const url=new URL("../icons/domain_disabled-fill.svg?v=7c1a4cf394c76c509fe08a3397ff67d5f8799533ffcca3673c34731f45753665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
