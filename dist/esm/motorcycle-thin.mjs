export const name="motorcycle-thin";
export const id="dl_273fa777083f49a5b8f4";
export const url=new URL("../icons/motorcycle-thin.svg?v=2bbca82a17237f276f69d99193176fa78ec59f22c590f7a1798e10b001181738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
