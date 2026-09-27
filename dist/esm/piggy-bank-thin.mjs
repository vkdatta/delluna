export const name="piggy-bank-thin";
export const id="dl_b05da103dac04d51b0c8";
export const url=new URL("../icons/piggy-bank-thin.svg?v=3bc493d3685825dca1d24c0e4fbfd9f4a130d72b3270e9dac820657627a21e97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
