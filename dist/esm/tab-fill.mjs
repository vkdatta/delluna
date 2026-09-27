export const name="tab-fill";
export const id="dl_be9e5942e574cc3f8e89";
export const url=new URL("../icons/tab-fill.svg?v=c519cddee38bc97e5db23ecf262326fb9cec6863cfdad8f5a73da79cb8dbd6ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
