export const name="link_2-fill";
export const id="dl_8e8adc9a4c674468ad7a";
export const url=new URL("../icons/link_2-fill.svg?v=6f24ffe7e2eebd0859ff405055c4d14ca5d474e06c390feaea30caa20cb5d80c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
