export const name="lucid_2-form";
export const id="dl_9f36579fad2b482fb263";
export const url=new URL("../icons/lucid_2-form.svg?v=9ad64f488da72c96c6474d9edc7ff0b42079ce5cc7fbe3446acd99046463f121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
