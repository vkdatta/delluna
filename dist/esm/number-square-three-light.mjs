export const name="number-square-three-light";
export const id="dl_d4f45e2e7fa84bfa8c96";
export const url=new URL("../icons/number-square-three-light.svg?v=74b696cab0b7abff55d7a20ecfad126d2f3c906c8feafbebe6c4ac26d6a0c24a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
