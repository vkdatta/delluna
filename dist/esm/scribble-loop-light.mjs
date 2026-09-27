export const name="scribble-loop-light";
export const id="dl_70456d902a0c107aced1";
export const url=new URL("../icons/scribble-loop-light.svg?v=827c9dd15d25aaca46c456a46cf283dd3f26be12682d4c2f969751167dcefbec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
