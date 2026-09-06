export const name="finn-the-human-bold";
export const id="dl_63ce9c51e2114c32a6a3";
export const url=new URL("../icons/finn-the-human-bold.svg?v=c77c769fd281927d2d4d334bcee06e681697cc8472e4158825dab29e37d68d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
