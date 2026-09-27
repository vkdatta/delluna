export const name="folder-simple-user-bold";
export const id="dl_ad7ea5d37e6b4ff2a316";
export const url=new URL("../icons/folder-simple-user-bold.svg?v=389e09532a3def1f9b0b3a99a309d913ff67076f8c1078e5ad0ab38a45a04bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
