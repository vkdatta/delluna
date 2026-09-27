export const name="folder-plus-thin";
export const id="dl_0a6293cb55fe457cbd4d";
export const url=new URL("../icons/folder-plus-thin.svg?v=3c1088d845104ebdadf5dd30f7534616e112b27f04331a76c4b2929a97935725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
