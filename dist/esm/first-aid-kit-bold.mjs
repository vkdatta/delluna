export const name="first-aid-kit-bold";
export const id="dl_e15ca2fa2e6b474f9b2c";
export const url=new URL("../icons/first-aid-kit-bold.svg?v=c5fe03b0df29f78cb2d78e2f1ae5e1d1ad667fa16f1fde0feffe4359608e6060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
