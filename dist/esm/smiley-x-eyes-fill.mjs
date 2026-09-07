export const name="smiley-x-eyes-fill";
export const id="dl_f7a7fa3bba8b48e0b755";
export const url=new URL("../icons/S/smiley-x-eyes-fill.svg?v=c3d6c437d2d6bcf27202bb66af1c66d5bcc0ae2051270e03a52a18e224f31192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
