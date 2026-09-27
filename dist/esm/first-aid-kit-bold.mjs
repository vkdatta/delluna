export const name="first-aid-kit-bold";
export const id="dl_e15ca2fa2e6b474f9b2c";
export const url=new URL("../icons/first-aid-kit-bold.svg?v=ccd2d37224613044e6803369d9d56b1a244c66a2bee499e0e7f0c35234e8efca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
