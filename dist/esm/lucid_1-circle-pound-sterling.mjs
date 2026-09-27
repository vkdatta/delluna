export const name="lucid_1-circle-pound-sterling";
export const id="dl_3a9a07936043433a8084";
export const url=new URL("../icons/lucid_1-circle-pound-sterling.svg?v=6bc0270316e7c9dc8b4dbe9bb5c1cd8d109b2774c75eecbb87008d8374ed1248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
