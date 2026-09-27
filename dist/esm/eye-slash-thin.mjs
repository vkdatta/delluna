export const name="eye-slash-thin";
export const id="dl_35dbfe812e3d40d5a090";
export const url=new URL("../icons/eye-slash-thin.svg?v=9b9659c5b3efb9834dcd2e33bf29d86149442b8f9c72c5b45f77b159e8f4c3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
