export const name="remove_from_queue";
export const id="dl_11ead2aa7877e4445ccb";
export const url=new URL("../icons/remove_from_queue.svg?v=45cdcd87ee0abbc50d5112003b587b8af9684d81f862239942e089a08bd1696f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
