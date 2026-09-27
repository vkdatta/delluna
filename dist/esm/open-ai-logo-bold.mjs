export const name="open-ai-logo-bold";
export const id="dl_e05488d14e1c459582a5";
export const url=new URL("../icons/open-ai-logo-bold.svg?v=e4fd9245bee84b4d8372f34a98617a0b1107256cba45483bfaf49498a0635ff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
