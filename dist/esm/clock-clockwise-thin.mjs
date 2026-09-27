export const name="clock-clockwise-thin";
export const id="dl_85a5a37e7b0c498eb946";
export const url=new URL("../icons/clock-clockwise-thin.svg?v=aba8c1652565a8cf37d188f58359e05f55b7cdd905479a9616413f18ad0ce9ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
