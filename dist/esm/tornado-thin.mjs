export const name="tornado-thin";
export const id="dl_f5e2f7fbdc8185a99e3f";
export const url=new URL("../icons/tornado-thin.svg?v=bf1e14a898c7f17ce7a036cb972abd19f1ee3c083e2605105099335fa888db2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
