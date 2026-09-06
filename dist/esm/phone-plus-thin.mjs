export const name="phone-plus-thin";
export const id="dl_56ecf500de9c4bf7b83d";
export const url=new URL("../icons/phone-plus-thin.svg?v=c936fe8a2e70657f88f4647c8d94e77b3ce460711d9f4b3b8378c12705783d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
