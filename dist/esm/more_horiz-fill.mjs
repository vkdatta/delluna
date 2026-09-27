export const name="more_horiz-fill";
export const id="dl_b371e487e382cfe720c6";
export const url=new URL("../icons/more_horiz-fill.svg?v=c7c5ab4ca42be6fc46211634322e49ce262c2caa44616ac0ea7f4bb34c50d152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
