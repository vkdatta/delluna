export const name="file-txt-thin";
export const id="dl_06b73ee8bbf641e4890a";
export const url=new URL("../icons/file-txt-thin.svg?v=e42a2968bafa5acfb842d0b3f7e4656e944497692eed8a7584677f14356d6fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
