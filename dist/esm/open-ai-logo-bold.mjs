export const name="open-ai-logo-bold";
export const id="dl_e05488d14e1c459582a5";
export const url=new URL("../icons/open-ai-logo-bold.svg?v=7a3236bbba392bbac533950aa73c30a0ddb96acb8a66e313e81372e180effcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
