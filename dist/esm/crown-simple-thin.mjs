export const name="crown-simple-thin";
export const id="dl_cc0b143961864753bbf3";
export const url=new URL("../icons/crown-simple-thin.svg?v=45d7328bfdfa3e4945915fa32ca24813f3bae620b081801970d200cdd8bf2819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
