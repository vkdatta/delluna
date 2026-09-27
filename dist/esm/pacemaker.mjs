export const name="pacemaker";
export const id="dl_b6c83a52170083ea55e9";
export const url=new URL("../icons/pacemaker.svg?v=340cb08f2de604dc5d0cf8e4fe9eab41856f8fdbf6e08331dc8326cbada3ecce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
