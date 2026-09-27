export const name="minus-thin";
export const id="dl_6f890dfca2fb46c09436";
export const url=new URL("../icons/minus-thin.svg?v=3feda6857d9017573f8ed3c4ba2c97a33948a9bd492d8f9ead6cc7e74dfc619d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
