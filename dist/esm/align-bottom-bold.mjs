export const name="align-bottom-bold";
export const id="dl_68a54ae0f288424096e4";
export const url=new URL("../icons/align-bottom-bold.svg?v=edfd1e93257a64c545723292c92e394892c86b0dd1546c06ca926358cc1360be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
