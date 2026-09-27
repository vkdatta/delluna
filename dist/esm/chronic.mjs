export const name="chronic";
export const id="dl_ea33126994f4b8389dc0";
export const url=new URL("../icons/chronic.svg?v=8254933179c6b210eb7f49b1bc4a46a245905b874850cc6f4c028503f35258a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
