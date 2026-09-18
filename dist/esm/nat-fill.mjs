export const name="nat-fill";
export const id="dl_b6c5cfbf711548448a18";
export const url=new URL("../icons/nat-fill.svg?v=caf8dc7dcc73a712dd3bda2ff0b69b10189e159f2886401c28fd0443f554d90c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
