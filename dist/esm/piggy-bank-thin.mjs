export const name="piggy-bank-thin";
export const id="dl_b05da103dac04d51b0c8";
export const url=new URL("../icons/piggy-bank-thin.svg?v=0c86706eb5610ba572fca2257ec658ae4311a6fac15d792903aea0c748381d56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
