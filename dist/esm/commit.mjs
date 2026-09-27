export const name="commit";
export const id="dl_93ce1e5a40e01b3bdada";
export const url=new URL("../icons/commit.svg?v=1f9c07ab1c6882f3995f534bad0366bcc5be49717949a01e4295bdc5f9666c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
