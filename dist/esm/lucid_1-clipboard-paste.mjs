export const name="lucid_1-clipboard-paste";
export const id="dl_02c5f1b90a3e4561a6ea";
export const url=new URL("../icons/lucid_1-clipboard-paste.svg?v=8094e53b1235f0df66be620e63d05ff141bd373f345fc8477bfde234642fc5b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
