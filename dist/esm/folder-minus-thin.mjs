export const name="folder-minus-thin";
export const id="dl_5e3c76123abc4abe8aad";
export const url=new URL("../icons/folder-minus-thin.svg?v=47c22dc0d5bf8ccfa3a66a1bcb3e4ab025bb092a2821ed21fc8a344040770035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
