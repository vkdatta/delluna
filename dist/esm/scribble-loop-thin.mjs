export const name="scribble-loop-thin";
export const id="dl_4019ca4e9642de69ea06";
export const url=new URL("../icons/scribble-loop-thin.svg?v=befec0904601f5a50220badeaeb8ffc256caf4b5521591aae30847880b573cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
