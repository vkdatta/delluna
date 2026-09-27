export const name="lucid_3-notebook-pen";
export const id="dl_512870a037314eb8b05e";
export const url=new URL("../icons/lucid_3-notebook-pen.svg?v=6ec3b71ca52df0556862d1cc7052b3fe012910fd06821ac7df69397a464d4f6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
