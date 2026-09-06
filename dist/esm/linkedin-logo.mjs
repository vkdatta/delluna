export const name="linkedin-logo";
export const id="dl_6b90fbedac2840518f28";
export const url=new URL("../icons/linkedin-logo.svg?v=e8f573d6b822de2befad63e797e06cd2676b13674052bba2f95c81b748ee0ad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
