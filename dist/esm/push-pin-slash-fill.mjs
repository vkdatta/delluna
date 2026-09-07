export const name="push-pin-slash-fill";
export const id="dl_16524367ab0b4adcb781";
export const url=new URL("../icons/push-pin-slash-fill.svg?v=c64d063e2e7dea612e3e58c88e94c78568bb02a16ab4e192f60cf4fd1e114cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
