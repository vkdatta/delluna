export const name="perspective-fill";
export const id="dl_03dba3c6cb8849ae8034";
export const url=new URL("../icons/perspective-fill.svg?v=0a647121ff11d7976f4786d004af6f31093b1727c05a71f33efcbbd577e8f480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
