export const name="lucid_1-bug";
export const id="dl_bc6eeccfcd784b6283fa";
export const url=new URL("../icons/lucid_1-bug.svg?v=3597d913b99ff6d98fc0f61a3cc1efcff67ff84566bc888e0eb312ed5ef841d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
