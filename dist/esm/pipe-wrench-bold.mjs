export const name="pipe-wrench-bold";
export const id="dl_57d19e15885f41a09dc8";
export const url=new URL("../icons/pipe-wrench-bold.svg?v=3564922d9d91c5db5a00b9395d6803406387c15f50d4b3349ff6b3ab20f169b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
