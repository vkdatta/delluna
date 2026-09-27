export const name="package-fill";
export const id="dl_867905a7c459433699d8";
export const url=new URL("../icons/package-fill.svg?v=6b4918e2b20f59775cf278e44b218e31d6170d9495f8f532a47077ce0709271e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
