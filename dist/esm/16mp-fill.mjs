export const name="16mp-fill";
export const id="dl_1e59baf5962670505c77";
export const url=new URL("../icons/16mp-fill.svg?v=a6d4c106ac9caff9dac85c21b1d71d6e6e200274083d70eefca150ce8d4aae44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
