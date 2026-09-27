export const name="dice-five-duotone";
export const id="dl_fd2312a9ff6f430496ff";
export const url=new URL("../icons/dice-five-duotone.svg?v=e3d73584d3fc9d565e24f068235dc589ea9842c58bc522bcc54b30f02d412d8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
