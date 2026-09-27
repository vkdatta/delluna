export const name="quickreply";
export const id="dl_79103ba6bb184afb3394";
export const url=new URL("../icons/quickreply.svg?v=c3dcc937a1a57a3895791022512ec1e41af2750653dc472d58566657e8711b4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
