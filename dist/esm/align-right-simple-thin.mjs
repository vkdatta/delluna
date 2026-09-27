export const name="align-right-simple-thin";
export const id="dl_86a96b7d425b43068064";
export const url=new URL("../icons/align-right-simple-thin.svg?v=cc0de34ebf127afadd21de0ed7d3a90a275f9096e5328e99045f5ec805dc5e02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
