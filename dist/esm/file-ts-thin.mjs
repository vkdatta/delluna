export const name="file-ts-thin";
export const id="dl_73b4d7d2137f4cd98c22";
export const url=new URL("../icons/file-ts-thin.svg?v=aefec115945fb1fc600d9db16ab94d2fe4a43089649b8bc5c93c8b92ab885be9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
