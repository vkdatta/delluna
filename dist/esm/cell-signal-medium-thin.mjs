export const name="cell-signal-medium-thin";
export const id="dl_99f83bc9137042f1aa65";
export const url=new URL("../icons/cell-signal-medium-thin.svg?v=aefd42f448db935c98feec0c30fdf44af719866db9fac0bff1eeeb85a364b660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
