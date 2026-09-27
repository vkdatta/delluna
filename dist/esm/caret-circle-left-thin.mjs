export const name="caret-circle-left-thin";
export const id="dl_36b3a12b44fa46e2b13d";
export const url=new URL("../icons/caret-circle-left-thin.svg?v=0e9684f0cf3e0bf40e9021271d3739ed082816065520bf95656e7e4762b4e61f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
