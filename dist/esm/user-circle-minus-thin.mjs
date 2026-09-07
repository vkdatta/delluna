export const name="user-circle-minus-thin";
export const id="dl_fbf8af8295cb46d996d4";
export const url=new URL("../icons/U/user-circle-minus-thin.svg?v=5cc3fedc9b775b12499700dc4fdbf6691873a156256ed5ab971a9ecf6220a5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
