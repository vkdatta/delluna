export const name="view_sidebar";
export const id="dl_5bef47739f9336604a8d";
export const url=new URL("../icons/view_sidebar.svg?v=44cab49df172ebd3f3e6df5de57304af7a0b8b9502c86768b49889e8bb9a20b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
