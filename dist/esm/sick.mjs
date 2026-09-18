export const name="sick";
export const id="dl_397b3e6618a942659d65";
export const url=new URL("../icons/sick.svg?v=755579064af6b48c26471a87c51b045d748bd5bd06ceca5e10547c438c68a32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
