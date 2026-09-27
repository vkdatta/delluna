export const name="drop-light";
export const id="dl_ec76e7738d754c248fd4";
export const url=new URL("../icons/drop-light.svg?v=47a446064b7d49d1b45672ef09945efeb4edc42a7574a436ce0bd2e47f2ae145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
