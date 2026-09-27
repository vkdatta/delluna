export const name="money-thin";
export const id="dl_ca27e4eac7c642d6b45f";
export const url=new URL("../icons/money-thin.svg?v=f129c8fa0576a2002f3c4cc75402b5c9e9e8f595824b04c72fc5ae29d22729e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
