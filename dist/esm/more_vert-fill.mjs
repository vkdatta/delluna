export const name="more_vert-fill";
export const id="dl_1c28ab843bfaaf45d72d";
export const url=new URL("../icons/more_vert-fill.svg?v=2857d55691bbb81214f2aecc72b896ff4b77b163ccddb5b7ebcb67c34524a411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
