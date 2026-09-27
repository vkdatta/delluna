export const name="microphone-slash-thin";
export const id="dl_a19163dfc5554f24877d";
export const url=new URL("../icons/microphone-slash-thin.svg?v=a28a2acff53f4c2c706d9fe8a41d94924664a50f9c0a10ad7401db8cb35be14a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
