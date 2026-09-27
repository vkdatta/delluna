export const name="text_snippet";
export const id="dl_47ad01d0c78577d4c7d3";
export const url=new URL("../icons/text_snippet.svg?v=d5e6b28f0a8fa1c6833565e8e8b46ecb38f434cade718f10b79431d4bdf73c6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
