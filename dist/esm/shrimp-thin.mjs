export const name="shrimp-thin";
export const id="dl_218a2d7ebd9fb6797846";
export const url=new URL("../icons/shrimp-thin.svg?v=97b044fb82235108fd305aa83ffde9aa2a76bfd0bc8d6f54eb26331ee1ee9a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
