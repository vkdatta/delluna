export const name="highlighter-circle-bold";
export const id="dl_1577a9ca98cf4d1cbd07";
export const url=new URL("../icons/highlighter-circle-bold.svg?v=06c6f7b62a68f88b444527bc8379d186c90dbbd01a0ece9f7ffd359392abe1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
