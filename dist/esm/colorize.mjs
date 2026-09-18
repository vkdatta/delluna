export const name="colorize";
export const id="dl_1497f2f04114407a83ed";
export const url=new URL("../icons/colorize.svg?v=e57721c67fd4b2a533370270a1d50cf7278036100a8d2a48b33df2915707db75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
