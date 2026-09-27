export const name="lab_research";
export const id="dl_58905924369c5d988cc3";
export const url=new URL("../icons/lab_research.svg?v=73b19e9fee87d608097dfa90dd21a5f00f8e9471e63ac138ebf4b1fb72561edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
