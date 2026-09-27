export const name="hdr_auto_select-fill";
export const id="dl_b3996c8f8d795a206b6d";
export const url=new URL("../icons/hdr_auto_select-fill.svg?v=02db5d9c0ecfbd15b98766732320253569760419723082c07b364b7a5e48d235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
