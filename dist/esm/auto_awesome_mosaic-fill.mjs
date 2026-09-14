export const name="auto_awesome_mosaic-fill";
export const id="dl_1a3153d3ea07431e9216";
export const url=new URL("../icons/A/auto_awesome_mosaic-fill.svg?v=5487434f2997eb1415ad673647756b361107ea8f982f1c8e2a2eee7386c895f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
