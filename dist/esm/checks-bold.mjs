export const name="checks-bold";
export const id="dl_0ea8b8eb6e5842b1b175";
export const url=new URL("../icons/checks-bold.svg?v=49bd9a74bde287391ffb6758ee417245659a173da82421300fe58c326cfd979c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
