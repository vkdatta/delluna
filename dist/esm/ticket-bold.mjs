export const name="ticket-bold";
export const id="dl_2b870af8e863189e382f";
export const url=new URL("../icons/ticket-bold.svg?v=b62832bee555be6c3c0aaad33e1c9e1b0aea6a7f62b05ddc8db26814620ffd1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
