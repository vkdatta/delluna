export const name="air-traffic-control-thin";
export const id="dl_1d17cc2f2cbf452c8a49";
export const url=new URL("../icons/air-traffic-control-thin.svg?v=2e7a4aff5dcc07c944127eaae0ca7636f02cbaeb6232370c1240453766deeddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
