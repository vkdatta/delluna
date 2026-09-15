export const name="download_2-fill";
export const id="dl_80f7ab2f48444e1a968c";
export const url=new URL("../icons/D/download_2-fill.svg?v=c38568bb604cad1b991af594617f53efaf7bcf927fb5de64efeefde8f1076e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
