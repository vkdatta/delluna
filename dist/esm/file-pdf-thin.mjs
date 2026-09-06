export const name="file-pdf-thin";
export const id="dl_1eb99777603f4010a0dd";
export const url=new URL("../icons/file-pdf-thin.svg?v=abf9eb71ab4a64f86c8a77cd9693999c6ae8a72a1c756e23c49eea1df66c58cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
