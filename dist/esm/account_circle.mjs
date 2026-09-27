export const name="account_circle";
export const id="dl_aa8097d3c6d419adb6b4";
export const url=new URL("../icons/account_circle.svg?v=51c52447deb11f788acec72053651a29799cf1499c20f87262930496724839b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
