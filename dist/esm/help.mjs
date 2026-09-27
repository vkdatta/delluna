export const name="help";
export const id="dl_a52ea27603f51bac1a19";
export const url=new URL("../icons/help.svg?v=2c05d96295dd64a8e9ad28174d7f1e3e1db51ae96265752c5edf92883d7cc219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
