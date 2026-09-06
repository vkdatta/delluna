export const name="envelope-simple-open";
export const id="dl_19efd37cd86642b5b48e";
export const url=new URL("../icons/envelope-simple-open.svg?v=52b2ae1ba90920ae04eed18c4d90f8a03e822819c8c83f5e6b3656bf85f7a326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
