export const name="boot";
export const id="dl_342b74de670f4b1b9bec";
export const url=new URL("../icons/boot.svg?v=9f0e9b5b978724820d7bf16827c04d7beecb5f44d7af410e793093b3cf5d39f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
