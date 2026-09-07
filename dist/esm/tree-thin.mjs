export const name="tree-thin";
export const id="dl_87d01c0376e74c348303";
export const url=new URL("../icons/T/tree-thin.svg?v=f5d9ddb3ed2acb04c447aa6fa97592f52cd6523228f17a5440de5ffea21cc3a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
