export const name="dots-three-circle-vertical-thin";
export const id="dl_c90fe523275b468a959d";
export const url=new URL("../icons/dots-three-circle-vertical-thin.svg?v=5edc22149805a79eba2c58ec80dc18adac84fa9ec050f974fd649ef26edf911b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
