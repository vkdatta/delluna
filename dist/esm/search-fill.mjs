export const name="search-fill";
export const id="dl_602083ad514c83fcfabe";
export const url=new URL("../icons/search-fill.svg?v=413ce12c49c85bb76cdfe180d92daf877bd3a794ca35452676708f45c3176ac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
