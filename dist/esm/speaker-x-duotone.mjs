export const name="speaker-x-duotone";
export const id="dl_fa3f8657bebacc687e84";
export const url=new URL("../icons/speaker-x-duotone.svg?v=bf7987cb89a47d56ed6dd32f1535de7f5a4a5002af53678fd075d8aa5882312d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
