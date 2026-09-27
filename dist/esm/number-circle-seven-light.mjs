export const name="number-circle-seven-light";
export const id="dl_1d07cc6cb79a4a478a45";
export const url=new URL("../icons/number-circle-seven-light.svg?v=eaeb901f2c94c5419c33dcfd1bfba54d6ccece15a8223b86433339e2d65d6927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
