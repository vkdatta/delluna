export const name="hourglass_arrow_down";
export const id="dl_2fa4ae3bd21e967d6838";
export const url=new URL("../icons/hourglass_arrow_down.svg?v=a0c8abffad3e66eadee151a2adaa22d68250de3b9552ad19bef1c2baea013100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
