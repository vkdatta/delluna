export const name="radioactive-fill";
export const id="dl_3f45b42c9cca4e60b95e";
export const url=new URL("../icons/radioactive-fill.svg?v=523ab7f3ee21557e78c8159905984ae42dc19e098728e231c5182487bc43ce25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
