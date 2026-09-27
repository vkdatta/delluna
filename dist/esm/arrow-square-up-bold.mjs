export const name="arrow-square-up-bold";
export const id="dl_f7e70af0f0404ef1a8ea";
export const url=new URL("../icons/arrow-square-up-bold.svg?v=a0be1fecc107129ba87d8e53ad4106bbc81fa756ff37390732b06fdd022224ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
