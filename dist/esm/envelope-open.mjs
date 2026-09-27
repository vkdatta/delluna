export const name="envelope-open";
export const id="dl_4044b787205b4bff9882";
export const url=new URL("../icons/envelope-open.svg?v=f4fca6256b1b5fc5f01206511d74c5b5d54cac6b90f8af9a88b6699c5fef4878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
