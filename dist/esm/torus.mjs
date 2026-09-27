export const name="torus";
export const id="dl_bd6e69b0722942928ce8";
export const url=new URL("../icons/torus.svg?v=68634555ec33142724d9638b6e42915d320324d2c4dc98d226e326c5a9b0a5f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
