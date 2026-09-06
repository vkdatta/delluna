export const name="folder-dashed-bold";
export const id="dl_33942625d64d4fefba2f";
export const url=new URL("../icons/folder-dashed-bold.svg?v=b5c779c9b0325de6fd13ff6de86d0fe0a36eb52e7bee8e250fed2271d54d8ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
