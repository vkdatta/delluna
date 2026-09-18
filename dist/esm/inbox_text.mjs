export const name="inbox_text";
export const id="dl_6997560964ee43b48be6";
export const url=new URL("../icons/I/inbox_text.svg?v=564383fc781fea8f3c0764b2c365beec89cbe82c0b749af743bf6fb38ac03de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
