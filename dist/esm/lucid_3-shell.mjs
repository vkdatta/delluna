export const name="lucid_3-shell";
export const id="dl_920e679e143945cb8aee";
export const url=new URL("../icons/lucid_3-shell.svg?v=6f60417fa34f02c135857d543d2022c8a74c3183118e55b7793b8bcaf63c5395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
