export const name="countertops";
export const id="dl_80c73b391f7099359b55";
export const url=new URL("../icons/countertops.svg?v=e69e362da1602c9be4003551c805a0231b1b2fd32661605ac894ddcc64267441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
