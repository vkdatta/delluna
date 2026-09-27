export const name="chats-circle-bold";
export const id="dl_5c238479f6c5468bb53d";
export const url=new URL("../icons/chats-circle-bold.svg?v=2e758f666ff9198301e2a7580e2c3eaaa0135360254d36cb787b2817ccf991f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
