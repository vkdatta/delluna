export const name="post_add";
export const id="dl_29e14fc843870e9df86e";
export const url=new URL("../icons/post_add.svg?v=436cede8ed18a36747bc20228e1541907cd7812de89ebd0d78bc24faa03599c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
