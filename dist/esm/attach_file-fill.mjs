export const name="attach_file-fill";
export const id="dl_40f0dfa01e3a4b55bcfe";
export const url=new URL("../icons/A/attach_file-fill.svg?v=8c43f5475afa79170a94156fef10987360e692b9097a1fa86232e5bc7c08c38a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
