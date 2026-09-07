export const name="spinner-ball-duotone";
export const id="dl_091ff53d93ce4296aab7";
export const url=new URL("../icons/S/spinner-ball-duotone.svg?v=d9be0d0cb6a78b7789c94e0573987f3034cab4d06c29857693f3d58543a284b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
