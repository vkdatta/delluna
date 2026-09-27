export const name="call";
export const id="dl_6ae680f06aa47c189d19";
export const url=new URL("../icons/call.svg?v=561045c48523ec884790a57311081ed81849d5c13b0671d0f6908fea1949df2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
