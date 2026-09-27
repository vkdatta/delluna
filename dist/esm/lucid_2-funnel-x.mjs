export const name="lucid_2-funnel-x";
export const id="dl_48b921a05ee94400b5d2";
export const url=new URL("../icons/lucid_2-funnel-x.svg?v=0aaf9fcf3e472b26bdcb7a0d204360f7f2c251a47c7e2bb1a31249832571937d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
