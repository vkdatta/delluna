export const name="microphone-stage-thin";
export const id="dl_9bb0fab7ecb240b6afee";
export const url=new URL("../icons/microphone-stage-thin.svg?v=0616d404161406511f1068f98609b4107ae51dffa62da51405970e3ca500e067",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
