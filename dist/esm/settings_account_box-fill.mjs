export const name="settings_account_box-fill";
export const id="dl_87823ff21ada4c7c5606";
export const url=new URL("../icons/settings_account_box-fill.svg?v=9e7f9dfe63294d8ea6cc601e17d80ec3288992409b1b26e60c2f8a570b3eb5d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
