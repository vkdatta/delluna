export const name="bluetooth-connected-thin";
export const id="dl_6d20b2c4327847a3ab28";
export const url=new URL("../icons/bluetooth-connected-thin.svg?v=a5da732aa997eb2a0e5da4eea0c8cca2ec99467960a16d83dd832f931783cdb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
