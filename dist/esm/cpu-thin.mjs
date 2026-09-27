export const name="cpu-thin";
export const id="dl_18ebb583ed224b979177";
export const url=new URL("../icons/cpu-thin.svg?v=ba8562f4e1bd2dfd50d62dd31ca5036941a0754a9d93bebd601a03c39c421aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
