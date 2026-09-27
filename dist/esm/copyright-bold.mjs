export const name="copyright-bold";
export const id="dl_67155335205d4958bbd2";
export const url=new URL("../icons/copyright-bold.svg?v=0c21e59a38f2db8eed80de57c12ddc04991f832ac520c03b5bab888bdbf19dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
