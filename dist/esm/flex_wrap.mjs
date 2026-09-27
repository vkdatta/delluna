export const name="flex_wrap";
export const id="dl_a6740190a255a44acd0b";
export const url=new URL("../icons/flex_wrap.svg?v=54d59fa008e0d5e7e799e0a9a8184a50d83fe365588d7833ae85d8bd9c43f751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
