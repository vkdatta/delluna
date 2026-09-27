export const name="foot_bones-fill";
export const id="dl_57f210c4da62dcc85083";
export const url=new URL("../icons/foot_bones-fill.svg?v=b8973ccaf59dc88c51a535b6646b3dcb4c935be0656e7856b121a07856b4913d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
