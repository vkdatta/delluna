export const name="arrow-fat-line-up";
export const id="dl_ed7400738cf941fd8b15";
export const url=new URL("../icons/arrow-fat-line-up.svg?v=12063f5f8f70d894068a5923920e2bb0a139f52a85431c129281cfd387b4cfa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
