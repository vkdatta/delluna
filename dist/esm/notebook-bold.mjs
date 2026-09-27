export const name="notebook-bold";
export const id="dl_a85568ff5bf44f12a286";
export const url=new URL("../icons/notebook-bold.svg?v=2ef1626a3f6bbdc1fc1c17fc19c6f81596612da56e4ee654a9b87c22544367eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
