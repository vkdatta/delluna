export const name="lucid_1-clipboard-clock";
export const id="dl_b8a797664f264606981f";
export const url=new URL("../icons/lucid_1-clipboard-clock.svg?v=4bd1feeebb4ddec30ca8f804c80f263bbb6bb0dce12ad90b5a2be5ddb7e68e1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
