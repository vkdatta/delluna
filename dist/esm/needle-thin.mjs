export const name="needle-thin";
export const id="dl_c01637509b954af9ab29";
export const url=new URL("../icons/needle-thin.svg?v=08c19712ed782b0390cd8f2a3e3e9327fb8713d21327c866109f7231403820d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
