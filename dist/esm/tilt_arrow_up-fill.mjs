export const name="tilt_arrow_up-fill";
export const id="dl_054f31e61bdd74413207";
export const url=new URL("../icons/tilt_arrow_up-fill.svg?v=181fc4974d14e0a1c832079be209ab5e5540477d563a4e2ca17b618b86a793dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
