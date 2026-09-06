export const name="battery-charging";
export const id="dl_67a9e0c8093042c0a9ef";
export const url=new URL("../icons/battery-charging.svg?v=5e2b18c3c8d1012e9345fbf45271dc8e42056b09a68617d7f1d5c88fc917e3bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
