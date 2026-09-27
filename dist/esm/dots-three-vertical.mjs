export const name="dots-three-vertical";
export const id="dl_1612067386004e3abbc5";
export const url=new URL("../icons/dots-three-vertical.svg?v=72f3716c547dc45d6c3201c216262f4c6bb24455daea19dfe8351cb6475763af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
