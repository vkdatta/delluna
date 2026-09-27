export const name="number-circle-six-thin";
export const id="dl_3451a4a62ab340318a87";
export const url=new URL("../icons/number-circle-six-thin.svg?v=8eb14dec37168c1ae6958c49de2fec808be82ac7619362a5bdf58fa1c793036a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
