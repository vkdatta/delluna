export const name="magnet-straight-bold";
export const id="dl_9cba3e4ad8584d44aeb7";
export const url=new URL("../icons/magnet-straight-bold.svg?v=ecdcbf748f9085f670688cc11fa4e56079d0a89a250411c5b3077616f504707c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
