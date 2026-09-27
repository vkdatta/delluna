export const name="person_play";
export const id="dl_1b7cdb6eefed3fe2c330";
export const url=new URL("../icons/person_play.svg?v=699e7d4bf7418fd2e7c97f93461a31687318e64847e91963b8d8e9223f9c6736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
