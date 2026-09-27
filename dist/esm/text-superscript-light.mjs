export const name="text-superscript-light";
export const id="dl_00ffc219f9db325ff93d";
export const url=new URL("../icons/text-superscript-light.svg?v=727697c88bc3126eb4fdc1c630700cf86f7d10e582116a639089ee45c52b9335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
