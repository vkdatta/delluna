export const name="bluetooth-slash-light";
export const id="dl_c26418ef15cb46c9b0d5";
export const url=new URL("../icons/bluetooth-slash-light.svg?v=5b9d4824e17607484570f9a049ff833eec83ab0dd87407b28af73c814db3f9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
