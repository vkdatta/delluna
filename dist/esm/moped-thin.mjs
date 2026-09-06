export const name="moped-thin";
export const id="dl_964bfc3e304944719f77";
export const url=new URL("../icons/moped-thin.svg?v=958c0b43b1f201607b154a0d939ac33b45f8793caf507b13f84f72f347c192e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
