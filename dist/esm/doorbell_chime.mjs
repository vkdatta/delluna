export const name="doorbell_chime";
export const id="dl_86b7df3173901b41b58f";
export const url=new URL("../icons/doorbell_chime.svg?v=dba4bd7953d1b16219bb4a5230e145cccbdf5bd6ad3a3b897ffa9cb569de764e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
