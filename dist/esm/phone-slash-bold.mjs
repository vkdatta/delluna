export const name="phone-slash-bold";
export const id="dl_ac86b4a04ec5489c9c3a";
export const url=new URL("../icons/phone-slash-bold.svg?v=bbc1fb505b74ad319b801a27a29c40a9fd12fc0973c587368201ccd8d54d7b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
