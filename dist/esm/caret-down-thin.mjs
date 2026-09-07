export const name="caret-down-thin";
export const id="dl_6ca02020c0704f5596c2";
export const url=new URL("../icons/caret-down-thin.svg?v=7fafbfc9cec326e56c4c7440695012808d3f43599724dab0e8ed036ba1d6eb00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
