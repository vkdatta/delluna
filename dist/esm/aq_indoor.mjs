export const name="aq_indoor";
export const id="dl_ed8510bb7f941774d995";
export const url=new URL("../icons/aq_indoor.svg?v=add33531b64e0169ca5078b536c9bddd125daac62fab2b662b301a8434f70378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
