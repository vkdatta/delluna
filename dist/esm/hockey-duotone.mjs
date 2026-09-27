export const name="hockey-duotone";
export const id="dl_c57716e875c5469388ac";
export const url=new URL("../icons/hockey-duotone.svg?v=cd3e93ee3f93171f03a0b13a33e82215803dc896af5be6c83106adb09762c560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
