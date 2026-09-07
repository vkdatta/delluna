export const name="brandy-thin";
export const id="dl_59b5ea51df144d9bb591";
export const url=new URL("../icons/brandy-thin.svg?v=f2947aa7320ba064b5e3d3bcb1792cd36005cf40bdaedafe156ea3c33640db77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
