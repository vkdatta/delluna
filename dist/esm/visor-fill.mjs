export const name="visor-fill";
export const id="dl_a7ff958af03246beaeeb";
export const url=new URL("../icons/V/visor-fill.svg?v=e51434a30f64b08bc6c862f453bd4600fc759d9980077f22e3111ea05f0c7856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
