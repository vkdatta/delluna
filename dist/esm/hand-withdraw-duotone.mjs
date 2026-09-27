export const name="hand-withdraw-duotone";
export const id="dl_ed465fdf257b4fc4b921";
export const url=new URL("../icons/hand-withdraw-duotone.svg?v=1fca64d3b879b9af72217dedb8978b6984fa30e9dcacc9eb061cccfcbea187d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
