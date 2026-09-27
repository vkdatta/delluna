export const name="lucid_1-app-window";
export const id="dl_71ded04ce09a49d0bd2a";
export const url=new URL("../icons/lucid_1-app-window.svg?v=d0adff939651792cfd03d61cdeeced2157d46bd096238cc7da8e841a2d58f723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
