export const name="user-plus-thin";
export const id="dl_33be698eab85df8aea40";
export const url=new URL("../icons/user-plus-thin.svg?v=cf42e4c23c44a504cde0962bbdb4f505f0434b873261db5378599f91336d4682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
