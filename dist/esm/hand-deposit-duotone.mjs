export const name="hand-deposit-duotone";
export const id="dl_cab46e0433104479b211";
export const url=new URL("../icons/hand-deposit-duotone.svg?v=2a3c8e2a41e4ff47cc3a6b269d0719874a8adb612e3431e2a9b1a46d2487ff49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
