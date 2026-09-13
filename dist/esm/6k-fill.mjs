export const name="6k-fill";
export const id="dl_fe5dc13bf1a747018627";
export const url=new URL("../icons/6/6k-fill.svg?v=e73fd3942b3e196931e4fe577cef33b1fe6c40a5927ef404c54fed53e45f7d7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
