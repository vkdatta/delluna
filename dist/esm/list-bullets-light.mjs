export const name="list-bullets-light";
export const id="dl_4a92872f1e87423f80d1";
export const url=new URL("../icons/list-bullets-light.svg?v=e2fff9170838427da330a12cfbf2a02e1dd76558de29b73332fc484e35c576a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
