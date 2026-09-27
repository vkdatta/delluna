export const name="high-definition";
export const id="dl_df89a8926a6b4d8bacc0";
export const url=new URL("../icons/high-definition.svg?v=a188a57b35157721919e9e2cc3f54f80ec5b09f0df55eeaa7d12bbce06b2439d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
