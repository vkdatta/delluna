export const name="fediverse-logo";
export const id="dl_9c5bfba8405743f0b21a";
export const url=new URL("../icons/fediverse-logo.svg?v=eb0d742a20d9078aa24694c1bedaaea91c58a61f3aa3328208746c6190ddbe12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
