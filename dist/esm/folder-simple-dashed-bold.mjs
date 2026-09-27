export const name="folder-simple-dashed-bold";
export const id="dl_79406ed8df044443866b";
export const url=new URL("../icons/folder-simple-dashed-bold.svg?v=53c2bbcddcc175ee1f9b9616ba0ebb28f9dfd190032c7490df32c0c4914a2456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
