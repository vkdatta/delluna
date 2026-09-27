export const name="pause-bold";
export const id="dl_de8e2ee28672438f8f91";
export const url=new URL("../icons/pause-bold.svg?v=9c7e2cb24af84d14d7ca9abcc2310d2789ef9cd2f963ef907f66b7dc70877972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
