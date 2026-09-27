export const name="roller_shades_closed-fill";
export const id="dl_bcd3e14075cd340b3645";
export const url=new URL("../icons/roller_shades_closed-fill.svg?v=fe095afc191deb10a7fdd2772e19d5abe799fef93ad97a527a95b90669a951df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
