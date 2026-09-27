export const name="escalator_warning-fill";
export const id="dl_4a9eb68097ccdf4a74af";
export const url=new URL("../icons/escalator_warning-fill.svg?v=8cf61f54ba39fc283fd0a7c524a402530c3ef761bb0ca7be800805f1d715f509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
