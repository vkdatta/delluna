export const name="microsoft-outlook-logo-light";
export const id="dl_d2ecb954a4424363a8c1";
export const url=new URL("../icons/microsoft-outlook-logo-light.svg?v=718e6a57b08f12a5f2715e7580ca7adf465d8f03f4ddf499135aa10f0f54898b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
