export const name="cube-thin";
export const id="dl_467b2a1188004d909922";
export const url=new URL("../icons/cube-thin.svg?v=7eaba914c864a5d7ab078dbdbb941aebc930f97e2dc83cdfb1c04595033ae94a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
