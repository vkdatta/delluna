export const name="phishing-fill";
export const id="dl_105f4e55c15c0788e37c";
export const url=new URL("../icons/phishing-fill.svg?v=b122a5d16afe58fceba3b0f6cf96362612695a24223612c205658ddfaccb50fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
