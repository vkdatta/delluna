export const name="align-bottom-thin";
export const id="dl_a7c786d0797a4d6fa1fd";
export const url=new URL("../icons/align-bottom-thin.svg?v=ed682778537052c6b976d11c17aeab7b187c76a0f2359460d1b558b98974824e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
