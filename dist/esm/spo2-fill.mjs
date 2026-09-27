export const name="spo2-fill";
export const id="dl_b427cebe57039b62364d";
export const url=new URL("../icons/spo2-fill.svg?v=fd1d6f6208928c0f858383a556b5a1ee18b70fbd8bac0217456deeb6780548ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
