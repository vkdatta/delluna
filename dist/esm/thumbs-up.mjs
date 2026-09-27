export const name="thumbs-up";
export const id="dl_ade39af6cfc8468683e5";
export const url=new URL("../icons/thumbs-up.svg?v=ec79b2172224f8f032a597c5e4f6bf04546c8c7009794ec35d7071000a486b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
