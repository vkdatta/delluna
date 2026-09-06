export const name="check-light";
export const id="dl_dd56f479ae5c4a7e82dc";
export const url=new URL("../icons/check-light.svg?v=f9669722a39144a637ee4a1dcfe52e655384baab1b32245b7b0d196727cfa04b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
