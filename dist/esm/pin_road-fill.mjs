export const name="pin_road-fill";
export const id="dl_62f96922e9b3dfa25dfd";
export const url=new URL("../icons/pin_road-fill.svg?v=4a15babaecb6141483291692c1c210e591564311fec788643a8b71d6e3daa63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
