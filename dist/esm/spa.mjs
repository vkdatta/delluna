export const name="spa";
export const id="dl_b28dcf036b47484597e3";
export const url=new URL("../icons/S/spa.svg?v=71a9e5ad125ebea621b91198b9eb99f23a142751e4d4df01311c96942641414e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
