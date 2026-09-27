export const name="film-script";
export const id="dl_efa8313d880a4fc08338";
export const url=new URL("../icons/film-script.svg?v=5b84115443b9e34aa423e7e5f4b5a337b84e4adef4e058abd02ea68f7a109ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
