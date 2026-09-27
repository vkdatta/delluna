export const name="strategy-bold";
export const id="dl_6fce3183838cc2426b8a";
export const url=new URL("../icons/strategy-bold.svg?v=dbcc758637f74acb579f36e46468e72800545a5e7a0a0fa801f8b43750e590f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
