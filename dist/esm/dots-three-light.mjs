export const name="dots-three-light";
export const id="dl_691b4e0530e844b48a1a";
export const url=new URL("../icons/dots-three-light.svg?v=5a49ea0f1ee966cc45ec0d960a4a5e085cbda428f6b012ba44c37f958ad2e45c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
