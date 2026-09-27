export const name="counter_3";
export const id="dl_4f3e5a778557f27b45a7";
export const url=new URL("../icons/counter_3.svg?v=80470ac73e452bc1b1e17dac76ec688074b4b33bc327a176caacb0c978d9e902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
