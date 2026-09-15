export const name="ev_shadow-fill";
export const id="dl_ed17aa66216c426b87ec";
export const url=new URL("../icons/E/ev_shadow-fill.svg?v=5104eac4c54b83e72eff916c8f51a39cc0889205e8032142b28b548a4248e96e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
