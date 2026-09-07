export const name="terminal-window-thin";
export const id="dl_47c0dc10bdce401a9b76";
export const url=new URL("../icons/T/terminal-window-thin.svg?v=b9dff7b44aa23e91cc674c56fa93fb4f29ac63cbbd5be5f070a50be77da834a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
