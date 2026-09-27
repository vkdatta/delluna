export const name="local_mall";
export const id="dl_370c504b45b1bf7fbb4d";
export const url=new URL("../icons/local_mall.svg?v=5694138f7b5209cc7b1ad7fe69258d3e6be4a2936795e885bf3fce03bbcbd229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
