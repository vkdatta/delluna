export const name="flashlight-duotone";
export const id="dl_a4665ff80bad45daada9";
export const url=new URL("../icons/flashlight-duotone.svg?v=713494c6a7e772c94c0cb4eccac43a3c21c28eafd6ddd3565beb2986f9806bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
