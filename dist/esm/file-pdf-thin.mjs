export const name="file-pdf-thin";
export const id="dl_1eb99777603f4010a0dd";
export const url=new URL("../icons/file-pdf-thin.svg?v=2de98573d1c813c0054b9c1972fc932053a53c7feb00317c3ea8ca42c7857010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
