export const name="lucid_1-bold";
export const id="dl_7d53a4bd28d944b7b715";
export const url=new URL("../icons/lucid_1-bold.svg?v=dced396f0b38704ef8f237d3d964c8ad0d028f84bf816bb36c178dfa0970bda2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
