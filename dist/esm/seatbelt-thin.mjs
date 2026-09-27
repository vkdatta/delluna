export const name="seatbelt-thin";
export const id="dl_9014eef4c02b515e41b5";
export const url=new URL("../icons/seatbelt-thin.svg?v=ab8b677be1f64c764d163d068a1e1114757eb11da01976e6632b0d03bc45bb99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
