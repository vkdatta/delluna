export const name="opacity-fill";
export const id="dl_710bed2ea6c0467db2c1";
export const url=new URL("../icons/O/opacity-fill.svg?v=0deaf4413d16d362c40cedc8c263599d47e96d2bb415fd288ef4105305a48ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
