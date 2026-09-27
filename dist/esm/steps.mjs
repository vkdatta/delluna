export const name="steps";
export const id="dl_af0b512ab5ef3e272289";
export const url=new URL("../icons/steps.svg?v=b5713e44025eee92248ab8c0eec21793f1bd5ae903422c602a9ce4188f42695d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
