export const name="stroke_full";
export const id="dl_09ae322575472ce8f50f";
export const url=new URL("../icons/stroke_full.svg?v=19bb7a1a115701bda4e98d5b71856e47265fc1e95800adae028d6b901529f7b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
