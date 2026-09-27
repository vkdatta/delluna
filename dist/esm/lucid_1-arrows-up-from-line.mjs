export const name="lucid_1-arrows-up-from-line";
export const id="dl_ddebd07e96054c65b7ce";
export const url=new URL("../icons/lucid_1-arrows-up-from-line.svg?v=8ff2f3e87f3361faf8261dd2586225d9eeb074f48fcb021c675271c085275ef9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
