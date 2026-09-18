export const name="home_mini-fill";
export const id="dl_537dc1b599794480b93d";
export const url=new URL("../icons/home_mini-fill.svg?v=9610780de296ca9e387cecfef4b6abce0db5460519b5d4e890b8488fb23ff07c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
