export const name="app-window-duotone";
export const id="dl_f052a9b763d149ecbe31";
export const url=new URL("../icons/app-window-duotone.svg?v=cd4e7a35c048a38e3adcc26eea85388a4de1f1b55a51daba7b30efb0343562f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
