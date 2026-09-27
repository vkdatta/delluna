export const name="wifi-none-thin";
export const id="dl_2a776c6665d0c7ab0672";
export const url=new URL("../icons/wifi-none-thin.svg?v=7c931b0fb0d32ae2bd310f97ca90b73bebb6fd5641ca28dd85c7d910e683209a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
