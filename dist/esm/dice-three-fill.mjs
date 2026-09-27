export const name="dice-three-fill";
export const id="dl_607f3a56a87042139727";
export const url=new URL("../icons/dice-three-fill.svg?v=dfa72e7b239edbc86d8af1ab637e9bb8a58fec16a5b95b6b5456f900e4308da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
