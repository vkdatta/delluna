export const name="vinyl-record-light";
export const id="dl_756cac84013c9a06c97a";
export const url=new URL("../icons/vinyl-record-light.svg?v=ad97d842c0ca2d564e9a7e8a48a4d0c165d9ef0f7330c6859cc97e74dee7e771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
