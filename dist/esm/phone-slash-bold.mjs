export const name="phone-slash-bold";
export const id="dl_ac86b4a04ec5489c9c3a";
export const url=new URL("../icons/phone-slash-bold.svg?v=063b7b9a27d0e0fa9ded5f5b0ff6f59b8c7484aaa855cbfd004e64427754b18a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
