export const name="contact_phone";
export const id="dl_96ba7adc119548a58bf6";
export const url=new URL("../icons/contact_phone.svg?v=fffa87cbdd6c1f04553eba8125763110d631d2eb0401600c494ce08b69335ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
