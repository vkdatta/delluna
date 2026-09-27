export const name="pants-fill";
export const id="dl_0064a58efeec4ee6b6aa";
export const url=new URL("../icons/pants-fill.svg?v=9ac97c202dcc71d71156cf2727cc6073c4dbee5f5a17ce9cfb2abe978dd8e6f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
