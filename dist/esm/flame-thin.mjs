export const name="flame-thin";
export const id="dl_263c48372b38482284f7";
export const url=new URL("../icons/flame-thin.svg?v=a0ccc75e9c022d2580d14bba4f798a300569118e0dd659b805aed5a370971ca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
