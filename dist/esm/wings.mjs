export const name="wings";
export const id="dl_23bec35753454e26960d";
export const url=new URL("../icons/wings.svg?v=686a61f005311159c957188eea2b4a9d4d6b64baa23fd0e2b72fec2518475c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
