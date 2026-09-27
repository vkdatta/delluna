export const name="no_backpack-fill";
export const id="dl_edcfd606e2618026aa18";
export const url=new URL("../icons/no_backpack-fill.svg?v=944b632bc7a1d66c7b8a982db7b37c364c66ecbd36207a0393cc87b73d6f59cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
