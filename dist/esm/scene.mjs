export const name="scene";
export const id="dl_a4d4dec375092346547e";
export const url=new URL("../icons/scene.svg?v=8bc674c813a8da8fe4a49b05dac64735e5fcf01fe6dbbe23c4f5968f34bcc498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
