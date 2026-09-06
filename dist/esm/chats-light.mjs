export const name="chats-light";
export const id="dl_81e4dda37ee9434dacac";
export const url=new URL("../icons/chats-light.svg?v=897e389d26b8ad8ee2bfdb98bc34f57471aeada474094b7f316c5450cde3fe6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
