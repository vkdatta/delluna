export const name="lucid_3-notebook-pen";
export const id="dl_512870a037314eb8b05e";
export const url=new URL("../icons/lucid_3-notebook-pen.svg?v=b46cf0e2afb1723541a0d185cabd898409737e4cf497270079d3831152b7ab5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
