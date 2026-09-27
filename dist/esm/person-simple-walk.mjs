export const name="person-simple-walk";
export const id="dl_367fff3185474dc2b45d";
export const url=new URL("../icons/person-simple-walk.svg?v=244c8307b26d17da9e5f193f947536f025601591db7ebb5bc85b3e2dd15fc9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
