export const name="letter-circle-v-thin";
export const id="dl_437da8fd00f1491caa5c";
export const url=new URL("../icons/letter-circle-v-thin.svg?v=7ddbbcefbe6752fb7c4fe196eafaae31b2ce619a7e2dbbc8383cc0b35d7b7130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
