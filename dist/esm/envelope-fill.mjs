export const name="envelope-fill";
export const id="dl_e574f8b8dfc24141bd00";
export const url=new URL("../icons/envelope-fill.svg?v=ed06a57f0bd141691e39b05fda850174502fa7423d31db31bb77821ee0540cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
