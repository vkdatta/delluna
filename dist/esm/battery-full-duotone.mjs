export const name="battery-full-duotone";
export const id="dl_4a38976f34d24dd7866c";
export const url=new URL("../icons/battery-full-duotone.svg?v=0fd33fef8af6fcce76fca4821634b50a3096c6770a184fbb8c8f84a4aacaa937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
