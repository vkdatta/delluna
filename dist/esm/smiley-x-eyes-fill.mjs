export const name="smiley-x-eyes-fill";
export const id="dl_9e9fc7f403b6e34f70dc";
export const url=new URL("../icons/smiley-x-eyes-fill.svg?v=c30dedaf380725c02cd8a300ee2276a5339d15548cabae8b4d3d0893ceacceba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
