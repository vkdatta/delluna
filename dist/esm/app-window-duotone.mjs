export const name="app-window-duotone";
export const id="dl_f052a9b763d149ecbe31";
export const url=new URL("../icons/app-window-duotone.svg?v=3e8dd70e1ab7f592591a55199e2c19fe90575030006a4b694dfe72f1026e3c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
