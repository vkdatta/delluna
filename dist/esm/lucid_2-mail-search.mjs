export const name="lucid_2-mail-search";
export const id="dl_abcee0f47c4e4a0196b4";
export const url=new URL("../icons/lucid_2-mail-search.svg?v=3772c1fdb101df3376310c50402763314afc158ac4b1e83d0277c7f7b25a157b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
