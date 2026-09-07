export const name="train-simple-thin";
export const id="dl_fad66d1a5c0a4e9aa547";
export const url=new URL("../icons/T/train-simple-thin.svg?v=fa37bb597c1ef3c9e075368e32745ff2825cd395cb116aa24542577c14355188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
