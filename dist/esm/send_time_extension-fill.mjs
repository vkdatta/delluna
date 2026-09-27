export const name="send_time_extension-fill";
export const id="dl_dfcc2bbfc4499d219342";
export const url=new URL("../icons/send_time_extension-fill.svg?v=114245659efb6b101433075b02348a8c212be021f52914fd24cf67571b26b23a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
