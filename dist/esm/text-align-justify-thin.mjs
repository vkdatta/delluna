export const name="text-align-justify-thin";
export const id="dl_0eaaf4734a526d55e893";
export const url=new URL("../icons/text-align-justify-thin.svg?v=6215d11749e8b4164fba7f46186e7464df05dacab97d3f427996ef1320405b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
