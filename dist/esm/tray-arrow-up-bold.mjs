export const name="tray-arrow-up-bold";
export const id="dl_5985c239b50e1d680bde";
export const url=new URL("../icons/tray-arrow-up-bold.svg?v=2104b0d0471410edae1ad224886e5b27af2e2a2ee6fa97a808acdb7129388f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
