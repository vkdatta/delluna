export const name="extension_off";
export const id="dl_fb619eda38984bc89341";
export const url=new URL("../icons/extension_off.svg?v=1475a59701583058de8f07de58bb7ff98f5a62a77bb65e142e192997f8003775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
