export const name="data_check-fill";
export const id="dl_baeb3412ef6502257233";
export const url=new URL("../icons/data_check-fill.svg?v=fd672d090d77f38d00a43ef4e2acbddaeea3850571452e059f8294a30f7ab539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
