export const name="charging-station-light";
export const id="dl_e4730cb1f57747a9a668";
export const url=new URL("../icons/charging-station-light.svg?v=4b26bcf9c44b02150305476a229a056542da9e603cf16a4da1639b8a5b54fe22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
