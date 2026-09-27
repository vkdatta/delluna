export const name="link-simple-horizontal-break-thin";
export const id="dl_f1b4913bc51d4b569bcb";
export const url=new URL("../icons/link-simple-horizontal-break-thin.svg?v=f1d41a8d39475f863ec6bb6d660042e4e6ac5d69cd10f0a315d60c33aa03c046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
