export const name="compare_arrows-fill";
export const id="dl_ecdb34d49d85e5cfd45f";
export const url=new URL("../icons/compare_arrows-fill.svg?v=6f6e38f61748f9bab135fd273e5138c5a49336fb91f3b2851aa965f2c274edf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
