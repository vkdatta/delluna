export const name="paper-plane-thin";
export const id="dl_b6e85ddd246248bfa70f";
export const url=new URL("../icons/paper-plane-thin.svg?v=b4521d773de229969d2d98c0fa9e15752308fa3020d3c8fecf42521a89c07d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
