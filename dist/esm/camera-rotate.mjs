export const name="camera-rotate";
export const id="dl_13d10f095a58486682d4";
export const url=new URL("../icons/camera-rotate.svg?v=230079d856a0578c5c4a64cb31fa16c4c16f45cccc2adff5d9c5b6e542b7c2bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
