export const name="closed-captioning-thin";
export const id="dl_d9c48d2d851047e0bf1e";
export const url=new URL("../icons/closed-captioning-thin.svg?v=0c6c553f4d46e746d985b2a08bd8f0647bb7a4b8f858974522c185e3e6f3031e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
