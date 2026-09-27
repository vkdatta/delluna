export const name="taxi_alert-fill";
export const id="dl_8f0fe64381c36bbe7ad3";
export const url=new URL("../icons/taxi_alert-fill.svg?v=329f6573886136d0eeb2ee0a03b2f6be047769a0627aa6e5dff13b866ddefaf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
