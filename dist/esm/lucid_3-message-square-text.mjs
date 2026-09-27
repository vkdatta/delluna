export const name="lucid_3-message-square-text";
export const id="dl_ed0bf7c05b22459fa05e";
export const url=new URL("../icons/lucid_3-message-square-text.svg?v=b8bcc482154d791045b051bd83e73b23aa2c5615ebfe7ba9610acfb9bcc4ba1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
