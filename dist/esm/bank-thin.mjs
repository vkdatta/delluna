export const name="bank-thin";
export const id="dl_d827fb3ba9ab4b61bae1";
export const url=new URL("../icons/bank-thin.svg?v=13a1fb3787af22829f1935dd02d084d4313ade8d6c3b8c2861942d2aca9509be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
