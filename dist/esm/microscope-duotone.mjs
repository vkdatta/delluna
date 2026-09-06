export const name="microscope-duotone";
export const id="dl_258774127ed648c5bc10";
export const url=new URL("../icons/microscope-duotone.svg?v=66226f0451c5de04bc3d900994fd4fd1c502f3e98f53e41d62b5ee165cfea0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
