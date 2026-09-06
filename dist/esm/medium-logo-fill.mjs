export const name="medium-logo-fill";
export const id="dl_b3dd7f4a8e2048d0a1c2";
export const url=new URL("../icons/medium-logo-fill.svg?v=f70e04b67ed4af9b78ac4b6fa44381aad621cb303c812f061b1f0f44a79c8942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
