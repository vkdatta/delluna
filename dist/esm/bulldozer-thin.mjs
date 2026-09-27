export const name="bulldozer-thin";
export const id="dl_866b0d7eb1f24882aa08";
export const url=new URL("../icons/bulldozer-thin.svg?v=a5dd273dbc67f74006ff341b462cea0fda12d5046847df0f43101b4eeeb908ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
