export const name="visibility_lock";
export const id="dl_93f79d9592c5266e54d7";
export const url=new URL("../icons/visibility_lock.svg?v=9bf42048b1cc3271ad8af332426711771e13d0beb715d52f70a69f73cae7ae4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
