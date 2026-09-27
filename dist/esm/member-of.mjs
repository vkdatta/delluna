export const name="member-of";
export const id="dl_994ca90cca4b4a1cac2e";
export const url=new URL("../icons/member-of.svg?v=889da31e090402143d065d839f6d36a5d214e760c329d4e18af7db15cb677b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
