export const name="emergency_heat_2-fill";
export const id="dl_8ae0115d02b3477d9574";
export const url=new URL("../icons/emergency_heat_2-fill.svg?v=e9c3ecfdf762dd2589716c205a96ffee6d82f4fc300d9138bdaa64094b4ff24a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
