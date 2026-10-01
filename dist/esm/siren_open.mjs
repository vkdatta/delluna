export const name="siren_open";
export const id="dl_2bbbb1ac1c3cbe5c3e22";
export const url=new URL("../icons/siren_open.svg?v=a35743cd49e79e47597f19b5db912c8c0e062922eee058b12b2df1da560f3c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
