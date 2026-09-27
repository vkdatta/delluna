export const name="remove";
export const id="dl_027bb681cf4e81107975";
export const url=new URL("../icons/remove.svg?v=208d01571450c8a125d384122e3ae5800c6c5e0814bd1afe87046cdc4219d8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
