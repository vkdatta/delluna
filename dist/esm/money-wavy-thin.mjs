export const name="money-wavy-thin";
export const id="dl_c352cf6701994d2592e2";
export const url=new URL("../icons/money-wavy-thin.svg?v=7e722faadf6f34c4147ad38175c5e452109573fee882499205e058a93ea8d8ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
