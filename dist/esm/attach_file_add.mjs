export const name="attach_file_add";
export const id="dl_1a00bf68d7909d4f1017";
export const url=new URL("../icons/attach_file_add.svg?v=1c982d2b5da8c140fb3f043b850d26cb8ef72a50cd9cd12f8b7a3bd57d4fb35e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
