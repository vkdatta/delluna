export const name="toggle-right";
export const id="dl_55f70c244ec038efaa92";
export const url=new URL("../icons/toggle-right.svg?v=7c643c33537f82a5dd1eb1f6e06683c92e4e7afec659ecaa91c3448438972cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
