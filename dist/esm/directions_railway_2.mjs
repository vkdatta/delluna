export const name="directions_railway_2";
export const id="dl_265e662cd4cd1f696c42";
export const url=new URL("../icons/directions_railway_2.svg?v=78868f43c56608280cf1b4f8adf44486104b89113f4d001118659f9dad42896d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
