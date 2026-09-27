export const name="sock-thin";
export const id="dl_bfc3b06864139efd5c8f";
export const url=new URL("../icons/sock-thin.svg?v=6711fa859309663bba18918ce721e7b966a6066ae21c472d6d2e4338ebab37cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
