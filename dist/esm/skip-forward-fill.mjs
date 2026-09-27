export const name="skip-forward-fill";
export const id="dl_7c911bee334803dbe988";
export const url=new URL("../icons/skip-forward-fill.svg?v=0d805940a3ae2bb8d21b5774f13f0f3b38d919a0777bd66b35df525cc3fa0189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
