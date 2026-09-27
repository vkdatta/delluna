export const name="ghost-bold";
export const id="dl_9173da078ec14a3d9f7e";
export const url=new URL("../icons/ghost-bold.svg?v=cbce45fc0e47bc9f770ac25126ed0ef17741d6bfac226ebfd3fa14fc2aaa9f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
