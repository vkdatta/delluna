export const name="cigarette-thin";
export const id="dl_48f6c7394d45488e9921";
export const url=new URL("../icons/cigarette-thin.svg?v=368f464dc4b90c175586ad09ef4db70ca856c74cb668a6cfcd438bbcea31a14d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
