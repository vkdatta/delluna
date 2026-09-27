export const name="file-arrow-up-bold";
export const id="dl_c67dc6a267ec411aaa25";
export const url=new URL("../icons/file-arrow-up-bold.svg?v=c78953d7e64a1e4990f6fe279abae6c7c3870028ef7a07fb7b3e9df2b886ac49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
