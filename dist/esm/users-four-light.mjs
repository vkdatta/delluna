export const name="users-four-light";
export const id="dl_a3238d79507f49f48eff";
export const url=new URL("../icons/U/users-four-light.svg?v=342967bf6bfeed78b091316f3b5a3f5f684cd5426994e165a6fcb0860c013027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
