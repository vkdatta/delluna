export const name="magnifying-glass-light";
export const id="dl_3562f3bbbc054c83af54";
export const url=new URL("../icons/magnifying-glass-light.svg?v=c3ba4007087303c87fddab493737de5cb48a08d1f579a38c29d77ebed3dfdaf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
