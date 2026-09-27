export const name="planet-thin";
export const id="dl_cafa5ed82c4c429987bf";
export const url=new URL("../icons/planet-thin.svg?v=70f85cd1d76a83c5a8673b36dd1c21b3c46bc7e25db264c32d39b6367b1ff111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
