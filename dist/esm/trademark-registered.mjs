export const name="trademark-registered";
export const id="dl_7247a7e022c778047f55";
export const url=new URL("../icons/trademark-registered.svg?v=3b34d4f1f4a2d2b7b96ffd4d373e293f0692fe0138b0dfebb4c86a4d5dd4bc1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
