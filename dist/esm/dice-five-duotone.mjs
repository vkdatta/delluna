export const name="dice-five-duotone";
export const id="dl_fd2312a9ff6f430496ff";
export const url=new URL("../icons/dice-five-duotone.svg?v=2d120fdd858a75a823b7fa6a70bd75fa639f75b4186a3d1b0dea6cac8d127e33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
