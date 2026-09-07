export const name="text-outdent-duotone";
export const id="dl_6245856db5804d28b9a8";
export const url=new URL("../icons/T/text-outdent-duotone.svg?v=174ec5d41dca729e93fac767c4e4a38a4ee98bbb67ddad0623a8542fce384d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
