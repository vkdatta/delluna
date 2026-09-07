export const name="spade-thin";
export const id="dl_91789ab5ef4440a69504";
export const url=new URL("../icons/S/spade-thin.svg?v=fd170cf46fe5ee2effd073e621c54819f0e11f939753e97d60c947ef138229e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
