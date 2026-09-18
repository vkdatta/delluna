export const name="phone_in_talk";
export const id="dl_031b4d9d93654c4a9575";
export const url=new URL("../icons/phone_in_talk.svg?v=94e2710b70eff0d99fcb391ab5b86b2e80a3d8f0ebab4b50d7f8e7f02fe2fd77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
