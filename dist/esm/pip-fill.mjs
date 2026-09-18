export const name="pip-fill";
export const id="dl_635a36b056554f9fb377";
export const url=new URL("../icons/P/pip-fill.svg?v=8f7ecdb07d9163755cd2c50e92f786d18935797f5c45af1da6109ed4523caa72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
