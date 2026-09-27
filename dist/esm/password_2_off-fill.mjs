export const name="password_2_off-fill";
export const id="dl_338454351a895c0c8adc";
export const url=new URL("../icons/password_2_off-fill.svg?v=2ec8f083b0a6e7e919f650250a400816d76c3fe69478cb18d71a652246b7b35e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
