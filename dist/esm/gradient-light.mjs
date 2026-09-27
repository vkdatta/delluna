export const name="gradient-light";
export const id="dl_9a46f36286e44680a931";
export const url=new URL("../icons/gradient-light.svg?v=554dc93b438f4691175f585471a1079b992c3032f51ff0c8bac2df1b0a4257fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
