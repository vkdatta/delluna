export const name="autorenew";
export const id="dl_a69104417692aa090599";
export const url=new URL("../icons/autorenew.svg?v=00a1ee01e0a4a66f9fe60af624228d7db18c7826f9851c91301391bc4b85bdfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
