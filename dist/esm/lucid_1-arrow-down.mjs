export const name="lucid_1-arrow-down";
export const id="dl_df11064ebc1c49888595";
export const url=new URL("../icons/lucid_1-arrow-down.svg?v=791b348205ab42349748db20344c6e3ab579c632a99a2b7d9cb1608c2e776d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
