export const name="opacity-fill";
export const id="dl_26145aa2b89048f8c223";
export const url=new URL("../icons/opacity-fill.svg?v=2668ea20b2cbc40ffa70f6488593a79e8c953f580f9cf31bda0eef1604e58350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
