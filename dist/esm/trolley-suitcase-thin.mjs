export const name="trolley-suitcase-thin";
export const id="dl_7055b1e81c8646e6b425";
export const url=new URL("../icons/T/trolley-suitcase-thin.svg?v=611886f408619f7bd5bdc440a65d7298a3c7441df00e0884e81238988d360338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
