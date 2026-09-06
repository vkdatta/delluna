export const name="bowl-food-thin";
export const id="dl_d14bec6a3f1b4d1cb885";
export const url=new URL("../icons/bowl-food-thin.svg?v=09be7c709fb69ff8bc7858747574316c492bb94bda5aebe32cfd2959b71e64e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
