export const name="carrot-duotone";
export const id="dl_454a9675b89d4fdf8c4b";
export const url=new URL("../icons/carrot-duotone.svg?v=81da82c8577dc37ed7fdbd87b84d80c57562df35c466595105d071f00eb08c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
