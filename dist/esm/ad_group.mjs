export const name="ad_group";
export const id="dl_e9b7f4e88db8bb1f3865";
export const url=new URL("../icons/ad_group.svg?v=9241aef377cc97d0dce3f7fe7023c60cb26fd4d7c3692825d283851d6fbb55b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
