export const name="plugs-connected";
export const id="dl_541b01d930b1400a97de";
export const url=new URL("../icons/plugs-connected.svg?v=d57e4b4a5fe234f769db4c66f97239beeb6b9cb3e164a984764e7df317356f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
