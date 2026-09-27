export const name="mixture_med";
export const id="dl_b3ffcb2fada10346f625";
export const url=new URL("../icons/mixture_med.svg?v=f80bd9d355d8cf8a14c0ed9aa3e7a4ee4e6005d56a47c2fb5c8982d3fc2462ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
