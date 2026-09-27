export const name="microphone-slash-thin";
export const id="dl_a19163dfc5554f24877d";
export const url=new URL("../icons/microphone-slash-thin.svg?v=dbe74e7d3bd6b70ae034f204b8ace357f377785a15e92bc453db51fae43e542a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
