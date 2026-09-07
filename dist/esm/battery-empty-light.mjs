export const name="battery-empty-light";
export const id="dl_b90a0baf1de04ddb81cf";
export const url=new URL("../icons/battery-empty-light.svg?v=6ca4727f40014bc30e89ac2e7b503c2f3ea9288e1bff28a972a4636ab3fc68d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
