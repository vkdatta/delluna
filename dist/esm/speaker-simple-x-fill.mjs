export const name="speaker-simple-x-fill";
export const id="dl_5685cc0efcc4d7b79bb1";
export const url=new URL("../icons/speaker-simple-x-fill.svg?v=6a5aec050d43208c473098c1fd793b1a0f7373694ff072a9c115fb00c4e13d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
