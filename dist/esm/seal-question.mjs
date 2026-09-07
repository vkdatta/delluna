export const name="seal-question";
export const id="dl_2d92c1fe5495467b8e6a";
export const url=new URL("../icons/S/seal-question.svg?v=92029ed1ead3259621e751982cd6c54857b09dc64c927f224cc84076b63b6e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
