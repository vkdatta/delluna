export const name="jeep-duotone";
export const id="dl_f1e0a1d317b8402f9693";
export const url=new URL("../icons/jeep-duotone.svg?v=f6aa8ebd14e4bb08d645744a5525dc842e268711c6b4ecfadd1efa7867307006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
