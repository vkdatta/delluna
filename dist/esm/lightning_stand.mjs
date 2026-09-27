export const name="lightning_stand";
export const id="dl_92174909ec429b00d3e5";
export const url=new URL("../icons/lightning_stand.svg?v=d34f0213363f76396230d6e49fe14bc3bf674172516fbcdebd470050bc3cf747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
