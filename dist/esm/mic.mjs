export const name="mic";
export const id="dl_923ef48b36e3a5cc7677";
export const url=new URL("../icons/mic.svg?v=9e133e94d789cda9237bca8a1f128f29d01a0d61626457dd32cbfa214da0d0b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
