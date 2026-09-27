export const name="cell-signal-x-thin";
export const id="dl_789c35baea1f47978471";
export const url=new URL("../icons/cell-signal-x-thin.svg?v=8703262722058d80108fbd2b1835e065b7f3821f354dbf2dc82864663c6d8291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
