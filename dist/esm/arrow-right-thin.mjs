export const name="arrow-right-thin";
export const id="dl_3e74be9e232f4377a7c0";
export const url=new URL("../icons/arrow-right-thin.svg?v=b6093458f2fc6adb488c6e06e6c13040d76b7be05b41070956229a77cd1e533a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
