export const name="virus-thin";
export const id="dl_a6d04f1edc394493aaa0";
export const url=new URL("../icons/V/virus-thin.svg?v=b158862d1e6e0fdb0db1002cc0539e3da6a0802b5857fb39fc8ed9e2d30e29e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
