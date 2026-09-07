export const name="smiley-wink-thin";
export const id="dl_c7ea58229ff74309ba7e";
export const url=new URL("../icons/S/smiley-wink-thin.svg?v=6018a5a4485c8df3f4a3e5741c8b6d85544f09e4ae5220d522a351a24c6caeb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
