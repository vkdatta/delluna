export const name="energy";
export const id="dl_4e7c273754d6091672b2";
export const url=new URL("../icons/energy.svg?v=56e2f0fa9d1de20ace0463dc3e508f7f8fdf59dbd1bc3caa4c25df6cc3f26c98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
