export const name="trend-up-thin";
export const id="dl_a4fdf3c6d02aa1867dfe";
export const url=new URL("../icons/trend-up-thin.svg?v=58b085a41563cc3f1d30e72553aac0051c8478f4c879ee8a74a21fd27f70529d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
