export const name="pencil-simple-slash-thin";
export const id="dl_dae753adaf5042f1a7f8";
export const url=new URL("../icons/pencil-simple-slash-thin.svg?v=ce3074ffd3c67f91214156fe73e3921a5f411fcba6f9cd9f0776f1a35ba6c022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
