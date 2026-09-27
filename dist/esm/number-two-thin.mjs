export const name="number-two-thin";
export const id="dl_2d8b16b9425344729555";
export const url=new URL("../icons/number-two-thin.svg?v=9252fb480069971b81012e995b6e48fdcbd049289ee7e9177f3cf1cb4232ee55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
