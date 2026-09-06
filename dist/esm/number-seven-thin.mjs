export const name="number-seven-thin";
export const id="dl_dc8db2ed8eef4a60aab0";
export const url=new URL("../icons/number-seven-thin.svg?v=0cee06e15231ec29fe51833fbb0616b23bc27367dcbf2472d1f08a7f1ab0f987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
