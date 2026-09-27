export const name="download_for_offline-fill";
export const id="dl_32b39972530e000256f6";
export const url=new URL("../icons/download_for_offline-fill.svg?v=548d74ec1dff371fba974970503a58c366ccba977231fff4a8e8cd14f3aa952a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
