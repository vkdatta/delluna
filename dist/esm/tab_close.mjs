export const name="tab_close";
export const id="dl_2896aced85913c13f781";
export const url=new URL("../icons/tab_close.svg?v=1be8ba568d6a3ffafb76fe2e2fb55db3dfa0eab4fb348c52532fd1bfbb9f2007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
