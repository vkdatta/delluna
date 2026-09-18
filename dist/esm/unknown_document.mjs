export const name="unknown_document";
export const id="dl_ef776e7977aa4341a1eb";
export const url=new URL("../icons/U/unknown_document.svg?v=9a0761097c7c3313b778ce6132b30eaeb055ddec960cb542048fab2a9c70b8cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
