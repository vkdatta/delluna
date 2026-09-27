export const name="prescription-thin";
export const id="dl_29a8e0dbf6584a259069";
export const url=new URL("../icons/prescription-thin.svg?v=0d060c0c6b0eab8ca4a2851d189c855066ff8d79b737631425fb5a8e234fce1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
