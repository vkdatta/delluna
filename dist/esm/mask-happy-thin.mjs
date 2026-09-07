export const name="mask-happy-thin";
export const id="dl_f503fd7bc18549d5a57d";
export const url=new URL("../icons/mask-happy-thin.svg?v=53dcc81ddaf6acd4fe645433819e1afcf98ab7a875207bca4c4398b42306b397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
