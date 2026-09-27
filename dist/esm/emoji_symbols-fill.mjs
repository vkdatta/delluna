export const name="emoji_symbols-fill";
export const id="dl_1219771c541d86571aca";
export const url=new URL("../icons/emoji_symbols-fill.svg?v=0c415d020c71a1e103eeefb4d1eed5d5e42fe911fa7279a1d4db2f1d55f58cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
