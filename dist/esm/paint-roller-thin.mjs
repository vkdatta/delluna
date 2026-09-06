export const name="paint-roller-thin";
export const id="dl_9a396e4fbd914947ab1a";
export const url=new URL("../icons/paint-roller-thin.svg?v=884fbb58685cb7114b4a88dfb1acb76ed0936165e668338ccf4be1050f339326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
