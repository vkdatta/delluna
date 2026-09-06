export const name="x-line-top";
export const id="dl_73ba9aca676a4a6a9015";
export const url=new URL("../icons/x-line-top.svg?v=134e562bbd02b084677c8fd9576426621af66abb19c8b1a6ee7b05d389afa88a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
