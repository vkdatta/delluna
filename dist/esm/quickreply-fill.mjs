export const name="quickreply-fill";
export const id="dl_2124eee17cd79564af53";
export const url=new URL("../icons/quickreply-fill.svg?v=a55d344f8ce9d895620c211764668a23879073cad33254fa20c0437ae73ac8d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
