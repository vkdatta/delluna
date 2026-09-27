export const name="function";
export const id="dl_a61959f1cf4c4dae89c0";
export const url=new URL("../icons/function.svg?v=4eb08b77bfb1e34e88c61d604442344b3068db93d94f58e3edc935f647285f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
