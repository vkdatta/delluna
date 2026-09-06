export const name="boot-duotone";
export const id="dl_c0fccfb14b7b4573babb";
export const url=new URL("../icons/boot-duotone.svg?v=002a59ae8fce4077764324b8f70cf2f48cd6c8a3fa6a367bd2bf219992fc1e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
