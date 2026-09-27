export const name="lucid_2-heading-1";
export const id="dl_367d5f188a4e49aebcf5";
export const url=new URL("../icons/lucid_2-heading-1.svg?v=d4d53f52af57b17fb467443b45893a43e422efe6e515da3823ff648a28dffd1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
