export const name="folder-simple-plus-bold";
export const id="dl_cc9ccd66d174419c805c";
export const url=new URL("../icons/folder-simple-plus-bold.svg?v=24e3fee63f3b4dd559c9f2b32222eb9d81b6e77cf7740a63d4eb0e4ef4a01901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
