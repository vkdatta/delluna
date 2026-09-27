export const name="desktop-bold";
export const id="dl_83ce61ffb6c344e59cd8";
export const url=new URL("../icons/desktop-bold.svg?v=d0f93f385ee1c7dc39f9f96804e0abf79ff9ae4ab68f8f55d962b728a59adfaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
