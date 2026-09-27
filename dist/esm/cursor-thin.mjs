export const name="cursor-thin";
export const id="dl_c834cd169b104be99595";
export const url=new URL("../icons/cursor-thin.svg?v=97e0cc6c51fb018700c4d54023d0dfaa155834b1e62c73c1943225adb76b83d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
