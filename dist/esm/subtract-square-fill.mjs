export const name="subtract-square-fill";
export const id="dl_aa58ceb15dfe55161539";
export const url=new URL("../icons/subtract-square-fill.svg?v=751e4ab7afc89385d53dcf20f110e4a99111e4d23973eb4759a6e3162f370a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
