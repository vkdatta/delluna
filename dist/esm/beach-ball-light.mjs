export const name="beach-ball-light";
export const id="dl_d446a97a2fd44688b02d";
export const url=new URL("../icons/beach-ball-light.svg?v=654115d968995fb8576fa59fe45c59227aa9464322e4f1d99ace9d0cc9bd44b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
