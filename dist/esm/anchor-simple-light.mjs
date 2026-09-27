export const name="anchor-simple-light";
export const id="dl_6973ad4c38f74f69b472";
export const url=new URL("../icons/anchor-simple-light.svg?v=8b072ee1a32b7ef7943312bc0b17499eda6cf410319b85964911727cbd5a540f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
