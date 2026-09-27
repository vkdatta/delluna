export const name="pencil";
export const id="dl_61474f1255b9349a3f26";
export const url=new URL("../icons/pencil.svg?v=f1850a20c6ee3afdd2576817b9b4efdd5dce27a11375a92898b9f835546bef34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
