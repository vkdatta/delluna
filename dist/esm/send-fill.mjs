export const name="send-fill";
export const id="dl_f6839779e4cf9bed26e4";
export const url=new URL("../icons/send-fill.svg?v=d4f053d0157c2cc2a6d38529440382e2b7b17ea8a2c0002d528bbc8ff45a0017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
