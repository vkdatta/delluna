export const name="keyboard_double_arrow_left";
export const id="dl_56d7770270df3494187d";
export const url=new URL("../icons/keyboard_double_arrow_left.svg?v=3fed1eb136e8df0ebb7a06e2cd428fb56f4541e135fc37bd7c2f5b2942581570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
