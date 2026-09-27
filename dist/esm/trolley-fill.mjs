export const name="trolley-fill";
export const id="dl_c2b8fe3b19f5d329d013";
export const url=new URL("../icons/trolley-fill.svg?v=a6b4bbd76406179104ed49bf7e157f941f8923725b0b8e5a7eaf418f00718a0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
