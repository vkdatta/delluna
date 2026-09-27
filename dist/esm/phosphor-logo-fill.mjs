export const name="phosphor-logo-fill";
export const id="dl_7d9c7576513349c6aea0";
export const url=new URL("../icons/phosphor-logo-fill.svg?v=8d995917d68e4a65ede2e1d3ae67b64b27b6c4057022550ef5293fcebdce4869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
