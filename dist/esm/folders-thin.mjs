export const name="folders-thin";
export const id="dl_a4079b3a2a744ed48de1";
export const url=new URL("../icons/folders-thin.svg?v=fef89262342ad0ef8a718bc4b0dedafbc691ad36244d2c288bfe08af847a7fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
