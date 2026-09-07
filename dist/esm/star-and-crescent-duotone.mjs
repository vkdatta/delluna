export const name="star-and-crescent-duotone";
export const id="dl_9c310f7cfbaf428da6f4";
export const url=new URL("../icons/S/star-and-crescent-duotone.svg?v=8e6df9498849172f6ed218fb00659f9c26ee256c4e949975b5003cc6b82f4578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
