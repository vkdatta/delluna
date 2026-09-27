export const name="user-circle-check-thin";
export const id="dl_67bafdd68e32835ae817";
export const url=new URL("../icons/user-circle-check-thin.svg?v=d3196147b7e8375d1aaa0a62c7c052f29f6d4ace982c2e0709a58f09b917e4c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
