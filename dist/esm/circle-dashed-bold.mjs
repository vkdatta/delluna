export const name="circle-dashed-bold";
export const id="dl_2fe1518987e743668c91";
export const url=new URL("../icons/circle-dashed-bold.svg?v=b704b4b3c60362142a96a5c6515f17b9aeb665c52280191fc5f9286a406e8eb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
