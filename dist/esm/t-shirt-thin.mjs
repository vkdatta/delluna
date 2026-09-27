export const name="t-shirt-thin";
export const id="dl_919d270de43e5f0f676d";
export const url=new URL("../icons/t-shirt-thin.svg?v=20ac850170b36a85b17019c77f9aa2aef24e41e8621b4acbc4308293c1d986aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
