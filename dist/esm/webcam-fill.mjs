export const name="webcam-fill";
export const id="dl_cefc2e41f954191a7526";
export const url=new URL("../icons/webcam-fill.svg?v=800e4290e6ec7b5267165b100c72609831098832fcd06e413e9fb2d4bea21cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
