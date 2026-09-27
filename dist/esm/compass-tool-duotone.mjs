export const name="compass-tool-duotone";
export const id="dl_3d8852d59ed74f42a65d";
export const url=new URL("../icons/compass-tool-duotone.svg?v=125ad6cf1dced98e630b43ced94be65aebd8fe726a2d14faacf073c6faab37ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
