export const name="flip-fill";
export const id="dl_7bd91af0c677ec602371";
export const url=new URL("../icons/flip-fill.svg?v=a1deaf12cf0c4673c076abf7e2b415305265aeb7dc5c386097cf9e74316488c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
