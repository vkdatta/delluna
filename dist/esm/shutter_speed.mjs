export const name="shutter_speed";
export const id="dl_073505382a78c06b7748";
export const url=new URL("../icons/shutter_speed.svg?v=a87ed7e262bfaa4155852b8f4382ddb8bcce2126c27cec36b337a3fb79be47d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
