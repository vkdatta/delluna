export const name="lucid_2-highlighter";
export const id="dl_7f9d97f3ccf24933a9b6";
export const url=new URL("../icons/lucid_2-highlighter.svg?v=4f476808d70dabe4c843b6b007bfd093e7c74ccb7ce83fa646400223d8eb8fc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
