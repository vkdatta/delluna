export const name="odt";
export const id="dl_949cd722001a081edbdf";
export const url=new URL("../icons/odt.svg?v=d6a7895e02f22e541b87bf3f03a3c4869f2031c9c9c774e1fa576e9239e3e4e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
