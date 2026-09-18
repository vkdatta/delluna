export const name="border_top-fill";
export const id="dl_7f9fe057d7ab4df882e5";
export const url=new URL("../icons/border_top-fill.svg?v=8092768f6cb479fb0c0d673fe8a6dcbf0de15f3f1052819809aec171017be529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
