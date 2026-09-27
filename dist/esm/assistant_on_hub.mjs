export const name="assistant_on_hub";
export const id="dl_89837ca053d72cb61266";
export const url=new URL("../icons/assistant_on_hub.svg?v=0158350b95e69f1e6b5eee30f807c156b0ef48030cfd0845ac96a0fb8affd413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
