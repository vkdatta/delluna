export const name="page_footer";
export const id="dl_2e5aa136c5f6dd889f49";
export const url=new URL("../icons/page_footer.svg?v=2c61ef4acb0d50bf3ce335a94aaca66896d854b80e3c36e932dc07a758641b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
