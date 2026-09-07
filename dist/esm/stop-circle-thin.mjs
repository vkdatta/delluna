export const name="stop-circle-thin";
export const id="dl_3f4dbd6f67ed45a2bdde";
export const url=new URL("../icons/S/stop-circle-thin.svg?v=edfc7c9ea910194d7fc4e755516aff17e572fccfd28e9dc1c84474b6fc24cafd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
