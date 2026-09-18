export const name="thumb_down";
export const id="dl_809acf9274874a23a2b6";
export const url=new URL("../icons/T/thumb_down.svg?v=7cdbcb486517039831589263157d1f716f38b08ca0987e47e2a7b94788d35b01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
