export const name="transportation";
export const id="dl_d71e3c288b0d108a23b0";
export const url=new URL("../icons/transportation.svg?v=7d81c97ac82ec6d354a4d5421637c3cb710e75e238b99a1e2b6990c7b21d2482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
