export const name="cameraswitch";
export const id="dl_5334403dd942df09d3b4";
export const url=new URL("../icons/cameraswitch.svg?v=72f18a90ded1a5802e107bddc8c9685487ae28e9c68176c36ecadd8a901db5e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
