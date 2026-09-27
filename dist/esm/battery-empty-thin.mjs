export const name="battery-empty-thin";
export const id="dl_e03401de3a0a4eb1ae64";
export const url=new URL("../icons/battery-empty-thin.svg?v=8a0ea4fd0cfc76b90d45b1bb8f87f91cf86154aedbebabac006ec1a8c421f7e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
