export const name="sailing";
export const id="dl_fdedbbf531e33d7df1d9";
export const url=new URL("../icons/sailing.svg?v=3b83530a5acd42724f0715be0ce17e1fe8d9a47dbbe0f51f874a8c705d153274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
