export const name="rectangle";
export const id="dl_a2e6d4c907244895b43f";
export const url=new URL("../icons/rectangle.svg?v=0c0d719ced81064b5a466d2dcf39a09077d39309773504d0bdd02b2fdc9a4590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
