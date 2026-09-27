export const name="arrows-in-cardinal-thin";
export const id="dl_e96978e13ab94346830a";
export const url=new URL("../icons/arrows-in-cardinal-thin.svg?v=8fc491e97e7fc7a1ebe3abacc8fc22595f2eec03f3f93a2a6373092f184f6a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
