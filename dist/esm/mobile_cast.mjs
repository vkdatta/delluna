export const name="mobile_cast";
export const id="dl_9be7dde8ce8012a70e4b";
export const url=new URL("../icons/mobile_cast.svg?v=a923d919f011540cdb6e6bd42e286034047cce3270e0533a6e08363c3828f10e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
