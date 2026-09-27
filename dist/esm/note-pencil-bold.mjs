export const name="note-pencil-bold";
export const id="dl_61f84f7779214c02947b";
export const url=new URL("../icons/note-pencil-bold.svg?v=c3fadf9a2bde3c3a508ea23fea09134245ba07b59414d1eb793d75095bf2ab98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
