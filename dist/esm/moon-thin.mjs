export const name="moon-thin";
export const id="dl_e6787f0c2b694753bafb";
export const url=new URL("../icons/moon-thin.svg?v=a4ec4fc5be4c4decae49c5edf852ba58642492b1cb2a86bb39603d233b856eef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
