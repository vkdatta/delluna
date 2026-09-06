export const name="baseball-helmet-light";
export const id="dl_6d34bd38a092452d8cfa";
export const url=new URL("../icons/baseball-helmet-light.svg?v=fd191a78604c241ffabe65383f1cba77af44f3772d267333443674cc077367ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
