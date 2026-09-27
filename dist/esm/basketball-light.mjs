export const name="basketball-light";
export const id="dl_e00420ba3bc6485bb055";
export const url=new URL("../icons/basketball-light.svg?v=9fda0dd5eebfab1ea19d912e9b674bb9a9cc1176d8c2f282fb8e5c26f2b17036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
