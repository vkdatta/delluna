export const name="tools_installation_kit-fill";
export const id="dl_01a452ce92bd481f9e85";
export const url=new URL("../icons/tools_installation_kit-fill.svg?v=3cf595d7366f23fc489aa26aaabc6369b7c11140b2b7680b5588e9ba17698c57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
