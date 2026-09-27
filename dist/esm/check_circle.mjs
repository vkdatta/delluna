export const name="check_circle";
export const id="dl_36c4e662f2fb8f93fd74";
export const url=new URL("../icons/check_circle.svg?v=ec0cf1cd00e78bf1107e196cf106e799d32abbd200863c7acaef9546435106b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
