export const name="phone";
export const id="dl_d4a1fb7e612b4dc2ac1a";
export const url=new URL("../icons/phone.svg?v=a6eaa18b76ebeff885aad0eff89dc286a659f263bea801359a6fe2d15cde24f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
