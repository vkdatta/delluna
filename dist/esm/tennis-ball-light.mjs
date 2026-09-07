export const name="tennis-ball-light";
export const id="dl_f64f899f6f644272bcda";
export const url=new URL("../icons/T/tennis-ball-light.svg?v=fca06d4d8438a4dacc36289cbd455da8119f90f9a1d3e830f8976a01793e28bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
