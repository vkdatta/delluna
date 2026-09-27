export const name="handbag-fill";
export const id="dl_5fbc27872edf4767a73d";
export const url=new URL("../icons/handbag-fill.svg?v=dcdb59d360a237944cc24121fbd0a5d7145d1a85e0fe6c12885c64f5cf6428b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
