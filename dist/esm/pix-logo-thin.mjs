export const name="pix-logo-thin";
export const id="dl_90e1b7a018cc4c61a7f8";
export const url=new URL("../icons/pix-logo-thin.svg?v=d9ff5df7830080ee33ded97d840341680e139e2381a42071491c9d4bccca0c5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
