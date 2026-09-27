export const name="coat-hanger";
export const id="dl_67faea8f02514ebab014";
export const url=new URL("../icons/coat-hanger.svg?v=6df6b303812b45f6f2cf788a53f47771dad54c6828e867ef91e59b536e9ffc56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
