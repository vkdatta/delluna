export const name="stack_star-fill";
export const id="dl_8ba927a9ba2b4a6796ba";
export const url=new URL("../icons/stack_star-fill.svg?v=6dfa1d385ae833c8cdb02233a8be06e84fbc8dfe6a43b2337565d9fca0f1ec34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
