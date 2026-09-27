export const name="account_circle";
export const id="dl_157fa8b5d2c7aa7b9245";
export const url=new URL("../icons/account_circle.svg?v=32137d821bd05911351f32997a1d449972ccaeb6e7f0d8e2d1db60c8314e5cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
