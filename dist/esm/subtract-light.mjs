export const name="subtract-light";
export const id="dl_e9c9ccd854ada60fb440";
export const url=new URL("../icons/subtract-light.svg?v=b9386be319d67833a1eb4d110a1d9d364d3b3b15390b1a2147c3e3db4261bc21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
