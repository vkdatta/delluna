export const name="videotape";
export const id="dl_df8d35336c4d4499a6be";
export const url=new URL("../icons/videotape.svg?v=d14751fd3736e4cff9edcc4e68a845956df6d7a2aee4c0c5fbe4649147f51831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
