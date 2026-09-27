export const name="lucid_1-bed-single";
export const id="dl_4bcc2446ca83443bab7d";
export const url=new URL("../icons/lucid_1-bed-single.svg?v=85e98aca3a5bfdf8f7121887360fa01d0233f29627a813a966c1262480f30601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
