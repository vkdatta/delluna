export const name="number-seven-light";
export const id="dl_c5bec27b949446bd988f";
export const url=new URL("../icons/number-seven-light.svg?v=43b20e7f88cc2214e3777340f8432cb1d50ed4427cf691dc12349584c364e474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
