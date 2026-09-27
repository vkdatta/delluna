export const name="markdown-logo-thin";
export const id="dl_78feb9f174f7469e9b75";
export const url=new URL("../icons/markdown-logo-thin.svg?v=1ec536fcf67d08809c17eda5a64b1302c114635504f2ec775945f812026a4a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
