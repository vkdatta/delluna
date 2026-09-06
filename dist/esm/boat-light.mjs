export const name="boat-light";
export const id="dl_f00e9f46c05a48faa297";
export const url=new URL("../icons/boat-light.svg?v=a20e672611ac47b5fc0579b0da2a2d8f263ffa006dce3fe126e87a8e304615cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
