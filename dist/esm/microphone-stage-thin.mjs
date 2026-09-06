export const name="microphone-stage-thin";
export const id="dl_9bb0fab7ecb240b6afee";
export const url=new URL("../icons/microphone-stage-thin.svg?v=0217ad9de7da6ba41975aa364c5c848a687322eaa25c8a17dd55ae0745470005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
