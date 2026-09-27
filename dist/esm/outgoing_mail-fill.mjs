export const name="outgoing_mail-fill";
export const id="dl_c80682426551dfb103fd";
export const url=new URL("../icons/outgoing_mail-fill.svg?v=515429e66b0f3ab6f79ad7f7dfb2cb2fb7e8c104a2af2148be4df7a70e2237cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
