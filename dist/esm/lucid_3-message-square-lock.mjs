export const name="lucid_3-message-square-lock";
export const id="dl_880050a685504be9ba61";
export const url=new URL("../icons/lucid_3-message-square-lock.svg?v=15723ef3b52f1fb13ec655083847e04c7c0f4c669d13dd710d21aa55d1fabdf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
