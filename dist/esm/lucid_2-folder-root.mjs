export const name="lucid_2-folder-root";
export const id="dl_c0025cdc4f074f338a84";
export const url=new URL("../icons/lucid_2-folder-root.svg?v=aaf9ef05ced58fe12d58ce60c6ec4c9d350c91512a4bb5f1343383c14f758b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
