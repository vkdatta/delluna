export const name="keyboard_option_key-fill";
export const id="dl_23fb0284405d45144506";
export const url=new URL("../icons/keyboard_option_key-fill.svg?v=f6aa40c7261acb009d75d7fc3f08389067de1efb996bca5c07067ee7f0635c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
