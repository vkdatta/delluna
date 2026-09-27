export const name="lucid_2-folder-code";
export const id="dl_5c3964d479e44153b3b0";
export const url=new URL("../icons/lucid_2-folder-code.svg?v=c3e0cb0b946d9655e1a2fd19d932d1dc4f78e8165615228c7ccd159c54a18d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
