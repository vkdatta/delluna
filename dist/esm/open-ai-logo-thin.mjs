export const name="open-ai-logo-thin";
export const id="dl_977aa4459950468e9e6a";
export const url=new URL("../icons/open-ai-logo-thin.svg?v=82d3cc63bb011f6778af14551f85089ac4a3a47207a80827c31509206ab7ad1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
