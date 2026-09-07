export const name="bread-thin";
export const id="dl_f79c5b68902c45869403";
export const url=new URL("../icons/bread-thin.svg?v=36a6861c553bcdd485baccc137493b2c251ba250f23b670556d72a5bccbe9f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
