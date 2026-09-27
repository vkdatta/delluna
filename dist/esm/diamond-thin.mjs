export const name="diamond-thin";
export const id="dl_9720b8b47f1647c3be75";
export const url=new URL("../icons/diamond-thin.svg?v=90b6ccdd455c55a8d12fbf50c372e6bc1629564b9137c3fe037cd7dc0a4dc73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
