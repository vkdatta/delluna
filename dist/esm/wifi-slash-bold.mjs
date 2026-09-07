export const name="wifi-slash-bold";
export const id="dl_3efae755b5e04d108039";
export const url=new URL("../icons/W/wifi-slash-bold.svg?v=9b20d9ebf6dea93e0a77f35adbceafefc8e9b4b54d881dd5ef95e48a27d327d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
