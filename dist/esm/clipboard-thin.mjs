export const name="clipboard-thin";
export const id="dl_cce6a6572cea4cc49f6a";
export const url=new URL("../icons/clipboard-thin.svg?v=b1b397deaa49300b522e7995131388769f9c7a3a73017dc04ef3b868811d80f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
