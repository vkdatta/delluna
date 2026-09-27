export const name="train-simple-thin";
export const id="dl_4ec3b1ed69492fb6f7d6";
export const url=new URL("../icons/train-simple-thin.svg?v=fa37bb597c1ef3c9e075368e32745ff2825cd395cb116aa24542577c14355188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
