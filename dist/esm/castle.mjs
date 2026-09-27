export const name="castle";
export const id="dl_479d1068189da5bc98d1";
export const url=new URL("../icons/castle.svg?v=01b5ecd0c73e1af531daf7cd3969e01da7ec61d5b7df9d5bc182b45a0ea32e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
