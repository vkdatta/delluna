export const name="chat_bubble";
export const id="dl_be67aafc08e229e053b7";
export const url=new URL("../icons/chat_bubble.svg?v=5ca99053c10b6c06fdfd5ff179790985875ca8c06d8ad9bb57717f654972804d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
