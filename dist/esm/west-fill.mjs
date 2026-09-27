export const name="west-fill";
export const id="dl_61c893688ba96feb4ee9";
export const url=new URL("../icons/west-fill.svg?v=1efdaea3beb67895accbf639297a7836cb4f1423e1b52a02c3db4cac3c6d892e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
