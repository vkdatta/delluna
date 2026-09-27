export const name="device-tablet-speaker-fill";
export const id="dl_69647331657b4630a94b";
export const url=new URL("../icons/device-tablet-speaker-fill.svg?v=6ae8cc5cd9bc2aec268026877207216d291466506c3f8cd09bbacd38aba559f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
