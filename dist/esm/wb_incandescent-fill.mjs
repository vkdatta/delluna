export const name="wb_incandescent-fill";
export const id="dl_289e6ef26fe647558794";
export const url=new URL("../icons/wb_incandescent-fill.svg?v=d2c4fc4c4588342b48300857f2928230c1033e791a553e402ca60dcacf05652d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
