export const name="dots-three-circle-vertical-thin";
export const id="dl_c90fe523275b468a959d";
export const url=new URL("../icons/dots-three-circle-vertical-thin.svg?v=c0d3146e5ab8df71c1e9c525caf9f7a25a5563437331035709f17b04c0aed651",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
