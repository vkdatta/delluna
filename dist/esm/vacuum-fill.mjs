export const name="vacuum-fill";
export const id="dl_9ead4150e5444c7e8991";
export const url=new URL("../icons/vacuum-fill.svg?v=ccde7c7f84b8f5b5871f89603fb7b87d15921a8ffca90370dc88f178893a3f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
