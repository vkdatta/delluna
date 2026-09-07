export const name="drop-slash-thin";
export const id="dl_3b0ac7f1ec7e4ee6b459";
export const url=new URL("../icons/drop-slash-thin.svg?v=82b406baa60de652b88a5bd7a8a690d79d92162b534b2bab3fc178a925124609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
