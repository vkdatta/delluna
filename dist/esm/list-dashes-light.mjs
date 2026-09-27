export const name="list-dashes-light";
export const id="dl_5fb8e71ed615443bae3a";
export const url=new URL("../icons/list-dashes-light.svg?v=976eb716d0940ee73e20b327b5cb251d44584a6a2be811794269c422f6b588ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
