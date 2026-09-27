export const name="image-bold";
export const id="dl_2d360984e8ef42489e17";
export const url=new URL("../icons/image-bold.svg?v=5b7a806ae27e791ef0e3a526ab45d60b9a23709c59ff8df7cf1017e45429b764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
