export const name="lucid_2-folder-pen";
export const id="dl_40efd0df2ecb40969074";
export const url=new URL("../icons/lucid_2-folder-pen.svg?v=fe3e897d659ea4fc5e7388a166262f45dd9312e8ceaaf327d0d550b908cb486a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
