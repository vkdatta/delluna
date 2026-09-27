export const name="smart_display";
export const id="dl_c884e42bd02bdf8cf1c7";
export const url=new URL("../icons/smart_display.svg?v=c1104219f7e3d65c4e6227caa455c79ed32bc671426cc71a4715cc777993d572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
