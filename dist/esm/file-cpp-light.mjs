export const name="file-cpp-light";
export const id="dl_a93f57c94b3e4e98991c";
export const url=new URL("../icons/file-cpp-light.svg?v=b0b446f72244f6f6d4854aae6e64c6f87a60bfa1db621212399fb1e027575ebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
