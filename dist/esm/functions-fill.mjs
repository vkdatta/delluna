export const name="functions-fill";
export const id="dl_d99a3c112e489b14059d";
export const url=new URL("../icons/functions-fill.svg?v=1c1d520b3d02afbe73e9c2275e8cec4f26438f4deeff8bedacea283fb5f5cd97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
