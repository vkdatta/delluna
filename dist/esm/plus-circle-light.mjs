export const name="plus-circle-light";
export const id="dl_5ba5ea86b6a84d8ca497";
export const url=new URL("../icons/plus-circle-light.svg?v=829a9595cf40c5e280b9dc77ca99c00fd87480c5f30405a0107d59090da90e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
