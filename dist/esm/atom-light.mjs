export const name="atom-light";
export const id="dl_07d46c20a6654c0c9a24";
export const url=new URL("../icons/atom-light.svg?v=a7e31286f775259c07c81025a21de80a5b747c31a2e8e7d9408b74cdf94138e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
