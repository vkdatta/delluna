export const name="eject";
export const id="dl_ef56d691c4f64c9e9311";
export const url=new URL("../icons/eject.svg?v=de1486b25ba490c9859d6982f07092f2407ca798d476872e570cda6460779f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
