export const name="tools_pliers_wire_stripper-fill";
export const id="dl_5ba8d8f9b0d2ad809345";
export const url=new URL("../icons/tools_pliers_wire_stripper-fill.svg?v=df58451f09947a5d71c8a27103e23b49567f5e58ba6e7b06af9a1e39d6489132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
