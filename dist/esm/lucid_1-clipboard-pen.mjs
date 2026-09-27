export const name="lucid_1-clipboard-pen";
export const id="dl_ef23a269338d47d19922";
export const url=new URL("../icons/lucid_1-clipboard-pen.svg?v=8c58b5cf3415a76d3bf61249af1b579c2297610e4ab692aba3edb8ea6143e203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
