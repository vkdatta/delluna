export const name="sailboat-thin";
export const id="dl_e69334f98726d8e96f75";
export const url=new URL("../icons/sailboat-thin.svg?v=5ac497776635410a3f4376e9a432d7630c33362f6dd9aec88e697cf60e52a003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
