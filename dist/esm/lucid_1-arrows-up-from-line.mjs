export const name="lucid_1-arrows-up-from-line";
export const id="dl_ddebd07e96054c65b7ce";
export const url=new URL("../icons/lucid_1-arrows-up-from-line.svg?v=9f2b9f445870ba5ed74038f132b115d7ea70d454a919f2ae2111af63e3b1d014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
