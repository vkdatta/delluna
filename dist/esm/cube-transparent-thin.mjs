export const name="cube-transparent-thin";
export const id="dl_5331e7a59cd04e50b49f";
export const url=new URL("../icons/cube-transparent-thin.svg?v=f8aa633b149797862ad99abcd637947a037c7e7cc70339f77b98051e33a25815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
