export const name="lucid_2-key-round";
export const id="dl_5deb514eedcd4abc86c6";
export const url=new URL("../icons/lucid_2-key-round.svg?v=2efc76c0d6add722dfc8c762e8011f8a28f1e750003a9a82d7f01673a8455063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
