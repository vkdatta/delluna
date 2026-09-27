export const name="lucid_1-banknote-check";
export const id="dl_1b7011f3feae4b838366";
export const url=new URL("../icons/lucid_1-banknote-check.svg?v=b29dfe621c3a1d72df84c845fcf043a05f11c8f974b2d670020da79d95949553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
