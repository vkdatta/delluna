export const name="lucid_2-file-question-mark";
export const id="dl_e02e9b9c99034eb2ab9f";
export const url=new URL("../icons/lucid_2-file-question-mark.svg?v=05d81e132e634ffd0e831654c52e63d1a3a8ccfdd0ca6548d56c457fc4da0695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
