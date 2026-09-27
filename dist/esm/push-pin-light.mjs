export const name="push-pin-light";
export const id="dl_bb7ebaa762144e4e8b97";
export const url=new URL("../icons/push-pin-light.svg?v=8103e1cef60a0a45321291e7b6bd7c778de5a6964e53d69b21f361144e7ea76e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
