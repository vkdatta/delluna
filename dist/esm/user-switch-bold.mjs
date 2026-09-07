export const name="user-switch-bold";
export const id="dl_d632aa64c0974275866c";
export const url=new URL("../icons/U/user-switch-bold.svg?v=762b98eea676e6baa9580af2be10fcf2e2c42f15931b5e23cb4f1bb60cb961c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
