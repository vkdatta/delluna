export const name="stack-minus-bold";
export const id="dl_8f066ded79e7d413e5bb";
export const url=new URL("../icons/stack-minus-bold.svg?v=e341f7e9991709cac26d6fd70a72174f5028f69cf57c202a4ffb1c371dd9b5f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
