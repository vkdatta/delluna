export const name="union-thin";
export const id="dl_918d59b28c7c47c8a192";
export const url=new URL("../icons/U/union-thin.svg?v=d828d5c2fbaf9588b5088dc30394dee05be53bbb2ca41c1a09c1518fd62f4ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
