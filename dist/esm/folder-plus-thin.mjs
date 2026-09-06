export const name="folder-plus-thin";
export const id="dl_0a6293cb55fe457cbd4d";
export const url=new URL("../icons/folder-plus-thin.svg?v=f1a4808529c3ba9af333ce2f113024f2f76fd406cbdd9759274be0b9a6032f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
