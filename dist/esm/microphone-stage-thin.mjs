export const name="microphone-stage-thin";
export const id="dl_9bb0fab7ecb240b6afee";
export const url=new URL("../icons/microphone-stage-thin.svg?v=6b05825544cea7621225c2257a53dc2c5a7fcee9a01d7f5cd3620de3b1086688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
