export const name="suitcase-rolling";
export const id="dl_81493145ef5947e89086";
export const url=new URL("../icons/S/suitcase-rolling.svg?v=682d60e41ae97e76385232c7bb58875f9f4ddc2d6f4855ae585c7f638201001f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
