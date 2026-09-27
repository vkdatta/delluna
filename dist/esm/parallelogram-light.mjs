export const name="parallelogram-light";
export const id="dl_cd0d7da48cf14c0380a9";
export const url=new URL("../icons/parallelogram-light.svg?v=0fc4646aa3ed086fb24c5cd6329e821081474bd6a7b9ecf85b497fc4b33683ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
