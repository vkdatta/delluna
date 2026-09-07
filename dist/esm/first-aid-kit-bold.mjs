export const name="first-aid-kit-bold";
export const id="dl_e15ca2fa2e6b474f9b2c";
export const url=new URL("../icons/first-aid-kit-bold.svg?v=b20c64678c89f87462d78bf4fa2384caf43d5f9215c51dd60116877db0a56526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
