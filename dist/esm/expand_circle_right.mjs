export const name="expand_circle_right";
export const id="dl_4ff69555dc61c7f4dbf9";
export const url=new URL("../icons/expand_circle_right.svg?v=2776a52fc8829fc3a47cafdbf7352ce9513f0f93fd4804f8302d813718d15afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
