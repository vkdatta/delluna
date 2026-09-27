export const name="needle-bold";
export const id="dl_3d07cecad2974eea9a23";
export const url=new URL("../icons/needle-bold.svg?v=78278b4ad4e0c77acbc328dc44efca7b7e1f7f2501d80bc2c159919b6a4ab566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
