export const name="lucid_2-iteration-cw";
export const id="dl_4d39cc97b956484f8ca2";
export const url=new URL("../icons/lucid_2-iteration-cw.svg?v=4e62f8d6a2fd4bc2cf2f8d90033a8d274625b477c6a325bb965f760075815d24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
