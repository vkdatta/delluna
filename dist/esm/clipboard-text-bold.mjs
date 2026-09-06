export const name="clipboard-text-bold";
export const id="dl_7b0182659dff49089bce";
export const url=new URL("../icons/clipboard-text-bold.svg?v=3d1f047a9ea53283cada888642cc9427e3ec7ac766beeefee19581454b4b26b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
