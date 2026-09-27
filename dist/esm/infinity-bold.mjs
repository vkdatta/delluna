export const name="infinity-bold";
export const id="dl_d80ccf5a0b074477a4fb";
export const url=new URL("../icons/infinity-bold.svg?v=0d75594a2955594a9fa63ce1952e7face6db6812a3bf0c3f71d49ec1e7512458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
