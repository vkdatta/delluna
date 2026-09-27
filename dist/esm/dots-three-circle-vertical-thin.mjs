export const name="dots-three-circle-vertical-thin";
export const id="dl_c90fe523275b468a959d";
export const url=new URL("../icons/dots-three-circle-vertical-thin.svg?v=5df98f067c32cc079f55bcc5af4f2b1f7e882550081ab3f2a54edf18e7f5c30a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
