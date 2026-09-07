export const name="shapes";
export const id="dl_f731d6452c824e089fe7";
export const url=new URL("../icons/S/shapes.svg?v=c75e2c304e0383be46b1b8e8895baf8d17ef656c9c9a72cb29a3fb95216853df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
