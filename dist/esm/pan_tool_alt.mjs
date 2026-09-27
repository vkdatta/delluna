export const name="pan_tool_alt";
export const id="dl_8fe8703344a3fc0aa9d4";
export const url=new URL("../icons/pan_tool_alt.svg?v=a89a4f7d6881e604776bf52a83ffc1b68f2b171eaaea4ad56a645a02c285a271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
