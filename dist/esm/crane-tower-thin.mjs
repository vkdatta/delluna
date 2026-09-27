export const name="crane-tower-thin";
export const id="dl_047b43da9bb14ace8cf5";
export const url=new URL("../icons/crane-tower-thin.svg?v=adfac327c1ad9991454cc80ba2af8d250b6b8fb5ce34455098c16a255b28cc13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
