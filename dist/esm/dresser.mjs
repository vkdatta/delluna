export const name="dresser";
export const id="dl_428e5f81e10c47b1aca4";
export const url=new URL("../icons/dresser.svg?v=319a65093adb6ec29a3981dff3404bd7e3048d2ad445ae929ae7969f4aadd6b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
