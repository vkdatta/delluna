export const name="television-simple";
export const id="dl_25d4b5a2c78819c8032b";
export const url=new URL("../icons/television-simple.svg?v=bf85985647f70e739233a93eb2950a1b1d6ef99c3702e155e6bcb3d0201a3de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
