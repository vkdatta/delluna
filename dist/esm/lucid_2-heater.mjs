export const name="lucid_2-heater";
export const id="dl_c8ca655216804d58bbc5";
export const url=new URL("../icons/lucid_2-heater.svg?v=2ac46d9a4159890cca9222b08bb9e4c3877e5f9bb36c457a03dfb86bb288f858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
