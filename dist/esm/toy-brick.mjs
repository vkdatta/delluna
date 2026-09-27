export const name="toy-brick";
export const id="dl_0e93b81aa2584d6a9e00";
export const url=new URL("../icons/toy-brick.svg?v=8a2a5ca20968f80e4ee1d2413edf27984766008cfca988419f4f9537754d3ed7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
