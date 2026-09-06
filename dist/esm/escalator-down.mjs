export const name="escalator-down";
export const id="dl_eb7dcd9f394b4330b308";
export const url=new URL("../icons/escalator-down.svg?v=712f0817ea91db377a6592ec494a673a82319413ee5c22eee147c88d307eec34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
