export const name="gamepad_circle_right-fill";
export const id="dl_706a91344bed11b334ca";
export const url=new URL("../icons/gamepad_circle_right-fill.svg?v=164136f34fcaa04461b9878a0a4206516ab1b62fc06bf84c299a7af95795c2cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
