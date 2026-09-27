export const name="arrow-bend-left-down-thin";
export const id="dl_b84d0f9dc5ed4413b805";
export const url=new URL("../icons/arrow-bend-left-down-thin.svg?v=de329bd3939d41f984638decb968d27d673600bf18911fcab995178f1b8e20d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
