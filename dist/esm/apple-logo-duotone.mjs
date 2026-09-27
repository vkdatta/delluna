export const name="apple-logo-duotone";
export const id="dl_a8db04985b6f44b8b2b8";
export const url=new URL("../icons/apple-logo-duotone.svg?v=be43961083a135ab94be0e935ce5cae72180c7050592571890956eeebe9e5bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
