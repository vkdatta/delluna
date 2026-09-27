export const name="shield-slash-fill";
export const id="dl_fd5efb992f829cc95da4";
export const url=new URL("../icons/shield-slash-fill.svg?v=5bbadade3ce04c72fba0077c51bc20d006ef23e2d94098ce2289411f232a22e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
