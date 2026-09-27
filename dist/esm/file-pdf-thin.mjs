export const name="file-pdf-thin";
export const id="dl_1eb99777603f4010a0dd";
export const url=new URL("../icons/file-pdf-thin.svg?v=49ff175ec46f274ea228080f82d8edef7b91f558a6b07895726651b8bc240e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
