export const name="gitlab-logo-fill";
export const id="dl_20505d95c5ee46f78339";
export const url=new URL("../icons/gitlab-logo-fill.svg?v=858bdf426477bb6dd434422b1c8a5e21abd1ebf19cf9d42a6e66428b5f6b7fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
