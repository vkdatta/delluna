export const name="exclude-thin";
export const id="dl_31ab8180f4134b838773";
export const url=new URL("../icons/exclude-thin.svg?v=d0c59c9facab48c77907f7f112d1a70ea440cf919f8bf9f918a969b6b72871ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
