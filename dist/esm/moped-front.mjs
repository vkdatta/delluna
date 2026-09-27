export const name="moped-front";
export const id="dl_42761abc653a4261acb6";
export const url=new URL("../icons/moped-front.svg?v=7b35d6dda6a1c496a1f35edb54801c8d45da5e7835cb602c6579f6bb34cce579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
