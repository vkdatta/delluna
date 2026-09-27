export const name="camping-fill";
export const id="dl_9713706dc2c4f4d28bb7";
export const url=new URL("../icons/camping-fill.svg?v=7e20814ff1d4ff23d48540aee6c7969726de2c4e05fc58cf1820e6a82f70eb77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
