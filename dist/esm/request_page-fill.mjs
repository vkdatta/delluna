export const name="request_page-fill";
export const id="dl_be55ecc2e25ad2b6360f";
export const url=new URL("../icons/request_page-fill.svg?v=a184bd4c0d82a019b4a212e436705f74909a9f6016823145e47edc313a360849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
