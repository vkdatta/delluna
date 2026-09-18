export const name="dashboard_2-fill";
export const id="dl_ec7c7a33dd314e7cbbeb";
export const url=new URL("../icons/dashboard_2-fill.svg?v=a7dfda1e72336925a7b2472507256869c4ffd6e2d0d10d27dc69779dde6db504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
