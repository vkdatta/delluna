export const name="medium-logo-thin";
export const id="dl_c6c3f1d69c6d41debd7c";
export const url=new URL("../icons/medium-logo-thin.svg?v=28e79f7f543b7c3e0ec83372eb0bc3b391515c3740cd2015a61d3edbbe227c63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
