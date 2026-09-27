export const name="send-fill";
export const id="dl_7ff45cecb5f59e59c08c";
export const url=new URL("../icons/send-fill.svg?v=56a0bb3437d766b834c66654d007fa98efb3ca01186154f8def73c803a33a2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
