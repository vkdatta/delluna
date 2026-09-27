export const name="lucid_3-message-circle-x";
export const id="dl_217be2ef63d44afd9413";
export const url=new URL("../icons/lucid_3-message-circle-x.svg?v=aa693ddf6617e895f1f79396d38f504dd1203308305fa96f754f076533d91b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
