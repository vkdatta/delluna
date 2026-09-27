export const name="lucid_3-merge";
export const id="dl_27af7f72f8914c558c9e";
export const url=new URL("../icons/lucid_3-merge.svg?v=8ec3cb76c7836bf91477031c70303d78b350a988fd9d5e59cd1793cda547bf24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
