export const name="user-check-thin";
export const id="dl_35d75c97646fcabf8006";
export const url=new URL("../icons/user-check-thin.svg?v=e4c613e87e05186cc698432acaf9bb2cb1bd9c420ed7c735e26fe530f1b804e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
