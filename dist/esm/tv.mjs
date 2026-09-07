export const name="tv";
export const id="dl_7e9ed127d5fb43a69082";
export const url=new URL("../icons/tv.svg?v=8971d6413819934fb6476608eb15c32fb8ad8dfe17eb83f65661770f00d568f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
