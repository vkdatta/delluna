export const name="bluetooth-light";
export const id="dl_91cd7e1727f94e45ae87";
export const url=new URL("../icons/bluetooth-light.svg?v=3b89c44a90a617d908feb073aa5bbee3763631ddbeed8f9d197a39a234dbba0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
