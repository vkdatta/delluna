export const name="wind-fill";
export const id="dl_34c547c1f3185b3e0e59";
export const url=new URL("../icons/wind-fill.svg?v=5aa44d84d74ca0350bd2e96074d387e996c695e0073905d8db29847252389b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
